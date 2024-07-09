export interface GetK8sApplicationRequest {
    /**
     * 应用ID，可通过调用ListApplication接口获取，详情请参见[ListApplication](~~149390~~)。
     * @example `5a166fbd-****-4f98-a286-781659d9****`
     */
    "AppId": string;
    /**
     * 查询来源：
     * - 为空表示普通查询。
     * - deploy表示从部署页面进入查询。
     * @example `deploy`
     */
    "From"?: string;
}
