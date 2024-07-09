export interface DescribeProtocolServiceRequest {
    /**
     * 协议服务ID。
     * - 格式：CSV
     * - 限制：协议服务ID最多可设置10个。
     * @example `ptc-197ed6a00f2b****,ptc-196ed6a00f2b****`
     */
    "ProtocolServiceIds"?: string;
    /**
     * 按照协议服务的状态作匹配。
     * 格式：CSV
     * 取值：
     * - Creating：创建中
     * - Starting：启动中
     * - Running：可用
     * - Updating：更新中
     * - Deleting：删除中
     * - Stopping：停止中
     * - Stopped：停止
     * @example `Running,Updating`
     */
    "Status"?: string;
    /**
     * 当请求的返回结果被截断时，您可以使用NextToken再次发起请求，获取从当前截断位置之后的内容。
     * @example `aBcdg==`
     */
    "NextToken"?: string;
    /**
     * 每次查询结果的个数限制。
     * - 最大值：100。
     * - 最小值：10。
     * - 默认值：20。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 文件系统ID。
     * @example `cpfs-099394bd928c****`
     */
    "FileSystemId": string;
    /**
     * 协议服务的描述或描述的一部分作匹配。
     * 限制：
     * - 长度为2~128个英文或中文字符。
     * - 必须以大小写字母或中文开头，不能以`http://`和`https://`开头。
     * - 可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。
     * @example `此协议服务的描述`
     */
    "Description"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同的请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * >若您未指定，则系统自动使用API请求的RequestId作为ClientToken标识。每次API请求的RequestId可能不一样。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    "ClientToken"?: string;
}
