export interface CreateFolderRequest {
    /**
     * 父资源夹ID。
     * @example `r-b1****`
     */
    "ParentFolderId"?: string;
    /**
     * 资源夹名称。
     * 长度为1~24个字符或汉字，可包含汉字、英文字母、数字、下划线（_）、半角句号（.）和短划线（-）。
     * @example `rdFolder`
     */
    "FolderName": string;
}
