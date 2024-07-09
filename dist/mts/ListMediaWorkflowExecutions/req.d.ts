export interface ListMediaWorkflowExecutionsRequest {
    /**
     * 需要查询实例的媒体工作流ID。可以通过**MPS控制台** > **工作流管理** > **工作流设置**获取。
     * @example `43b7335a4b1d4fe883670036affb****`
     */
    "MediaWorkflowId"?: string;
    /**
     * 媒体工作流名称。可以通过**MPS控制台** > **工作流管理** > **工作流设置**获取。
     * @example `example-mediaworkflow-****`
     */
    "MediaWorkflowName"?: string;
    /**
     * 媒体工作流指定的输入文件OSS Bucket。遵循RFC 3986（UTF8编码，并对保留字符进行URLEncode）。更多信息，请参见[URLEncode说明](~~423796~~)。
     * @example `http://example-****.cn-hangzhou.aliyuncs.com/test****.flv`
     */
    "InputFileURL"?: string;
    /**
     * 下一页标识，32位UUID。请求第一页时，NextPageToken为空；请求后续文件时需传入前一页查询结果中的NextPageToken值。
     * @example `39f8e0bc005e4f309379701645f4****`
     */
    "NextPageToken"?: string;
    /**
     * 最大可返回的媒体工作流执行实例数。取值范围：`[1,100]`，默认值：**10**。
     * @example `1`
     */
    "MaximumPageSize"?: number;
}
