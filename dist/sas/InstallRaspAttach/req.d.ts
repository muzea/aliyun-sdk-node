export interface InstallRaspAttachRequest {
    /**
     * 应用分组ID。
     * @example `64b8b994563c306b4fedxxxx`
     */
    "ApplicationId": string;
    /**
     * 待安装RASP探针的服务器UUID列表，最多支持设置20个UUID。
     */
    "EcsUUIDList"?: string[];
}
