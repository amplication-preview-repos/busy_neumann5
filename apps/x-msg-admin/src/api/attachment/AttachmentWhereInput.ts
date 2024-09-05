import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AttachmentWhereInput = {
  fileType?: StringNullableFilter;
  fileUrl?: StringNullableFilter;
  id?: StringFilter;
};
