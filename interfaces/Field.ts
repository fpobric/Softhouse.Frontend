interface Field {
  detailTitle: string;
  detailValue: string;
  validationType?: string;
  validations?: {
    type: string;
    params: never[];
  }[];
  detailValue2?: string | undefined;
  type?: string;
  name?: string;
  editable?: boolean;
  isEditing?: boolean;
  label?: string;
  additionalAction?: () => void;
  additionalField?: Object;
  group?: Array<{
    title: string;
    value: string;
  }> | null;
  formName?: string;
  schema?: any;
}

export default Field;
