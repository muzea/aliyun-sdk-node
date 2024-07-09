export interface SendRenderingInstanceCommandsRequest {
    /**
     * 云应用服务实例ID
     * @example `render-9f8c57355d224ad7beaf95e145f22111`
     */
    "RenderingInstanceId": string;
    /**
     * shell命令字符串。支持输入多条命令，以";"/换行符分隔，
     * - 禁用rm/reboot等危险命令
     * @example `date;ls -l /tmp`
     */
    "Commands": string;
}
