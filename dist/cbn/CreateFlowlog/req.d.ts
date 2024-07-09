export interface CreateFlowlogRequest {
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的RequestId作为ClientToken标识。每次API请求的RequestId可能不一样。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
    /**
     * 流日志所属的地域ID。
     * 您可以通过调用[DescribeChildInstanceRegions](~~132080~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 流日志名称。
     * 名称可以为空或长度为1～128个字符，不能以http://或https://开头。
     * @example `myFlowlog`
     */
    "FlowLogName"?: string;
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
    "CenId": string;
    /**
     * 存储捕获流量的Project。
     * - 如果您已经在当前地域创建了Project，您可以输入已创建的Project的名称。
     * - 如果您未在当前地域创建Project，您可以为Project自定义名称，系统会帮您自动创建Project。
     *     Project名称在阿里云地域内全局唯一，创建后不可修改。其命名规则如下：
     *     - Project名称必须全局唯一。
     *     - 只能包括小写字母、数字和短划线（-）。
     *     - 必须以小写字母或者数字开头和结尾。
     *     - 长度为3~63字符。
     * @example `flowlog-project`
     */
    "ProjectName": string;
    /**
     * 存储捕获流量的Logstore。
     * - 如果您已经在当前地域创建了Logstore，您可以输入已创建的Logstore的名称。
     * - 如果您未在当前地域创建Logstore，您可以为Logstore自定义名称，系统会帮您自动创建Logstore。
     *     Logstore名称。其命名规则如下：
     *     - 同一个Project下，Logstore名称不可重复。
     *     - 只能包括小写字母、数字、短划线（-）和下划线（_）。
     *     - 必须以小写字母或者数字开头和结尾。
     *     - 长度为3~63字符。
     * @example `flowlog-logstore`
     */
    "LogStoreName": string;
    /**
     * 流日志捕获流量的捕获窗口时长。单位：秒。取值：**60**或**600**。默认值：**600**。
     * @example `600`
     */
    "Interval"?: number;
    /**
     * 跨地域连接ID或者VBR连接ID。
     * > 本参数为必填参数。
     * @example `tr-attach-r6g0m3epjehw57****`
     */
    "TransitRouterAttachmentId"?: string;
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
}
