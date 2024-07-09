export interface PublishOsVersionRequest {
    /**
     * 所属项目ID
     * @example `P0VFCREU`
     */
    "ProjectId": string;
    /**
     * 版本ID
     * @example `1`
     */
    "VersionId": string;
    /**
     * 是否推送消息
     * @example `false`
     */
    "SendMessage": boolean;
}
