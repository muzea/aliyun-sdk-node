export interface DescribeTaskRequest {
    /**
     * 凭证Token内容。
     * @example `01W3ZZOQ`
     */
    "Token"?: string;
    /**
     * 任务ID。
     * @example `t-*********************`
     */
    "TaskId"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfmvywqfey5njq`
     */
    "ResourceGroupId"?: string;
}
