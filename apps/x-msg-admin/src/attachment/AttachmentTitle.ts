import { Attachment as TAttachment } from "../api/attachment/Attachment";

export const ATTACHMENT_TITLE_FIELD = "fileType";

export const AttachmentTitle = (record: TAttachment): string => {
  return record.fileType?.toString() || String(record.id);
};
