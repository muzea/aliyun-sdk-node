export interface DescribeCdsFileShareLinksRequest {
    /**
     * 企业网盘ID。
     * @example `cn-hangzhou+cds-532033****`
     */
    "CdsId": string;
    /**
     * 分享ID。
     * @example `7JQX1Fs****
    `
     */
    "ShareId"?: string;
    /**
     * 分享的创建者列表。
     */
    "Creators"?: string[];
    /**
     * 分享名称，支持模糊匹配。
     * @example `user`
     */
    "ShareName"?: string;
    /**
     * 分享状态。
     * @example `enabled`
     */
    "Status"?: string;
    /**
     * 限定此次返回资源的数量，取值范围为1\~100。如果没有填写，则默认取值100。
     * 返回结果可以小于指定的数量，但不能多于指定的数量。
     * @example `100`
     */
    "MaxResults"?: number;
    /**
     * 查询凭证（Token）。取值为上一次调用该接口返回的`NextToken`参数值，初次调用接口时无需设置该参数。
     * @example `AAAAAV3MpHK1AP0pfERHZN5pu6nmB7qrRFJ8vmttjxPL****`
     */
    "NextToken"?: string;
}
