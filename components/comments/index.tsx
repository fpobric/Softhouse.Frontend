import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getComments,
  getUpdatedComments,
  setComments,
} from "../../store/comments";
import Loading from "../loading";
import Comment from "../../interfaces/Comment";
import EditComment from "./comment-edit";
import { useRouter } from "next/router";
import { PageTitle } from "../page-title";
import { useSession } from "next-auth/react";

const Comments = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [commentKey, setCommentKey] = useState<string>("");
  const dispatch = useDispatch<any>();
  const { comments } = useSelector((state: any) => state);
  const { data: session } = useSession();

  const getAllComments = (updated?: boolean) => {
    dispatch(updated ? getUpdatedComments() : getComments()).then(() => {
      setIsLoading(false);
    });
  };

  useEffect(() => {
    setIsUpdate(router.isReady && router.route.includes("updated"));
    getAllComments(isUpdate);
  }, [isUpdate]);

  const save = (data: Comment): void => {
    setCommentKey("-");
    setIsLoading(true);
    let allComments = [...comments.data];

    allComments[
      allComments.findIndex(
        (c: Comment) => c.id === data.id && c.postId === data.postId
      )
    ] = data;
    dispatch(setComments(allComments)).then(() => {
      getAllComments();
    });
  };

  return (
    <div className="comments">
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <PageTitle
            text={isUpdate ? "Updated comments" : "Original comments"}
          />
          <div>
            {comments?.data && comments.data.length > 0 ? (
              comments.data.map((item: Comment, key: any) => (
                <div className="mt-3" key={key}>
                  <div
                    className="d-flex flex-wrap"
                    onClick={() =>
                      setCommentKey(!isUpdate && session?.user ? key : "-")
                    }
                  >
                    {key !== commentKey ? (
                      <div className={session?.user ? "-pointer" : ""}>
                        <span className="fw-bold me-2">Post id:</span>{" "}
                        {item.postId}
                        <div>
                          <span className="fw-bold me-2">Name and email:</span>{" "}
                          {item.name}-{item.email}
                        </div>
                        <div>
                          <span className="fw-bold me-2">Comment content:</span>
                          {item.body}
                        </div>
                      </div>
                    ) : (
                      <EditComment comment={item} save={save} />
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="fw-bold">No comments</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Comments;
