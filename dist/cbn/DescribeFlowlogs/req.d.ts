export interface DescribeFlowlogsRequest {
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的RequestId作为ClientToken标识。每次API请求的RequestId可能不一样。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
    /**
     * 流日志所属地域ID。
     * 您可以通过调用[DescribeChildInstanceRegions](~~132080~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 流日志的名称。
     * 名称可以为空或长度为1～128个字符，不能以http://或https://开头。
     * @example `myFlowlog`
     */
    "FlowLogName"?: string;
    /**
     * 流日志ID。
     * @example `flowlog-m5evbtbpt****`
     */
    "FlowLogId"?: string;
    /**
     * 流日志的描述信息。
     * 描述可以为空或长度为1～256个字符，不能以http://或https://开头。
     * @example `myFlowlog`
     */
    "Description"?: string;
    /**
     * 云企业网实例ID。
     * @example `cen-7qthudw0ll6jmc****`
     */
    "CenId"?: string;
    /**
     * 存储捕获流量的Project名称。
     * Project名称长度为3~63字符，必须以小写字母或者数字开头和结尾，只能包括小写字母、数字和短划线（-）。
     * @example `FlowLogProject`
     */
    "ProjectName"?: string;
    /**
     * 存储捕获流量的LogStore名称。
     * Logstore名称长度为3~63字符，必须以小写字母或者数字开头和结尾，只能包括小写字母、数字、短划线（-）和下划线（_）。
     * @example `FlowLogStore`
     */
    "LogStoreName"?: string;
    /**
     * 流日志的状态。取值：
     * - **Active**：已启动。
     * - **Inactive**：未启动。
     * @example `Active`
     */
    "Status"?: string;
    /**
     * 列表的页码。默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页的条目数。最小值：**1**。默认值：**20**。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 标签信息。
     * 一次最多支持输入20个标签信息。
     */
    "Tag"?: {
        /**
         * 资源的标签键。
         * 一旦传入该值，则不允许为空字符串。最多支持64个字符，不能以`aliyun`或者`acs:`开头，不能包含`http://`或者`https:// `。
         * 一次最多支持输入20个标签的标签键。
         * @example `TagKey`
         */
        Key: string;
        /**
         * 资源的标签值。
         * 标签值可以为空或输入不超过128个字符的字符串，不能以`aliyun`或者`acs:`开头，不能包含`http://`或者`https:// `。
         * 每一个标签键对应一个标签值，一次最多支持输入20个标签键对应的标签值。
         * @example `TagValue`
         */
        Value: string;
    }[];
    /**
     * 网络实例连接ID。
     * @example `tr-attach-qieks13jnt1cchy***`
     */
    "TransitRouterAttachmentId"?: string;
}
