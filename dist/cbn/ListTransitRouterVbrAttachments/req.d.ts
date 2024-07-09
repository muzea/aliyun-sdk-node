export interface ListTransitRouterVbrAttachmentsRequest {
    /**
     * 云企业网实例ID。
     * @example `cen-j3jzhw1zpau2km****`
     */
    "CenId"?: string;
    /**
     * 企业版转发路由器实例所属地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * VBR连接ID。
     * @example `tr-attach-oyf70wfuorwx87****`
     */
    "TransitRouterAttachmentId"?: string;
    /**
     * 企业版转发路由器实例ID。
     * @example `tr-bp1su1ytdxtataupl****`
     */
    "TransitRouterId"?: string;
    /**
     * 分批次查询时，每次显示的最大条目数。默认值为**20**。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的NextToken值。
     * @example `dd20****`
     */
    "NextToken"?: string;
    /**
     * 标签信息。
     * 一次最多支持输入20个标签信息。
     */
    "Tag"?: {
        /**
         * 资源的标签键。
         * 一旦传入该值，则不允许为空字符串。最多支持64个字符，不能以`aliyun`或者`acs:`开头，不能包含`http://`或者`https:// `。
         * 一次最多支持输入20个标签的标签键。
         * @example `tagtest`
         */
        Key: string;
        /**
         * 资源的标签值。
         * 标签值可以为空或输入不超过128个字符的字符串，不能以`aliyun`或者`acs:`开头，不能包含`http://`或者`https:// `。
         * 每一个标签键对应一个标签值，一次最多支持输入20个标签键对应的标签值。
         * @example `tagtest`
         */
        Value: string;
    }[];
}
