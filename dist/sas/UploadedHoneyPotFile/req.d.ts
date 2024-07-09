export interface UploadedHoneyPotFileRequest {
    /**
     * 上传文件使用的FileKey。
     * > 格式为：HONEYPOT_FILE/{时间戳}_{自定义文件名}
     * @example `HONEYPOT_FILE/1601097845544644_********`
     */
    "FileKey": string;
    /**
     * 上传文件的名称。
     * @example `trojan.zip`
     */
    "FileName": string;
    /**
     * 文件类型。
     * @example `application/zip`
     */
    "FileType": string;
    /**
     * 蜜罐管理节点ID。
     * > 调用[ListHoneypotNode](~~ListHoneypotNode~~)接口获取该值。
     * @example `cc427e14-f257-4670-9d2b-d83bbbe*****`
     */
    "NodeId"?: string;
    /**
     * 上传文件对应的模板提示。
     * @example `{\"help\":\".zip\",\"label\":\"file\",\"type\":\"file\",\"key\":\"ftpfiles.zip\"}`
     */
    "TemplateExtra": string;
    /**
     * 蜜罐镜像名称。
     * @example `ruoyi`
     */
    "HoneypotImageName": string;
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
}
