export interface ListPermissionsRequest {
    /**
     * 共享资源类型。
     * 支持共享的资源类型，请参见[支持资源共享的云服务](~~450526~~)。
     * @example `VSwitch`
     */
    "ResourceType"?: string;
    /**
     * 单次请求返回结果的最大条数。
     * 取值范围：1~100。默认值：20。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 当请求的返回结果被截断时，您可以使用`NextToken`再次发起请求，获取从当前截断位置之后的内容。
     * @example `TGlzdFJlc291cm****`
     */
    "NextToken"?: string;
}
