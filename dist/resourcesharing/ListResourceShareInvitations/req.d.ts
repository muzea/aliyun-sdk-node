export interface ListResourceShareInvitationsRequest {
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
    /**
     * 共享单元ID。
     */
    "ResourceShareIds"?: string[];
    /**
     * 资源共享邀请ID。
     */
    "ResourceShareInvitationIds"?: string[];
}
