import { SortOrder } from "../../util/SortOrder";

export type AttachmentOrderByInput = {
  createdAt?: SortOrder;
  fileType?: SortOrder;
  fileUrl?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
