export interface UpdateFolderRequest {
    /**
     * 资源夹ID。
     * @example `fd-u8B321****`
     */
    "FolderId": string;
    /**
     * 新资源夹名称。
     * 长度为1~24个字符或汉字，可包含汉字、英文字母、数字、下划线（_）、点号（.）和短横线（-）。
     * @example `rdFolder`
     */
    "NewFolderName": string;
}
