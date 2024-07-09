export interface DescribeClusterPolicyResponse {
    /**
     * UDP 端口：
     * * on：打开
     * * off：关闭
     * @example `on`
     */
    UdpPort: string;
    /**
     * > 此值只在 `AsyncMode` 为 `true` 时有效
     * 当前查询命令的运行状态
     * * false：还未完成。
     * * true：已完成。
     * @example `true`
     */
    TaskFinished: boolean;
    /**
     * Request Id
     * @example `XXX-XXX`
     */
    RequestId: string;
    /**
     * USB 重定向：
     * * off
     * * on
     * @example `off`
     */
    UsbRedirect: string;
    /**
     * 本地剪贴板在云桌面中：
     * * off：关闭
     * * read：只可读
     * * write：只可写
     * * readwrite：可读 & 可写
     * @example `readwrite`
     */
    Clipboard: string;
    /**
     * 水印：
     * * off
     * * on
     * @example `off`
     */
    Watermark: string;
    /**
     * > 此值只在 `AsyncMode` 为 `true` 时有效
     * 当前查询命令的任务 id。
     * @example `t-xxx`
     */
    TaskId: string;
    /**
     * 域名白名单
     * * 白名单为空时，允许访问所有域名
     * * 白名单非空时，仅允许访问列表中的域名
     * * 支持 `*` 通配符
     * * 多条域名规则时之间用逗号分隔
     * @example `*.abc.com,*.xyz.com`
     */
    DomainList: string;
    /**
     * 音频：
     * * on：打开
     * * off：关闭
     * @example `on`
     */
    Audio: string;
    /**
     * 本地磁盘在云桌面中的映射驱动器：
     * * off：关闭
     * * read：只可读
     * * readwrite：可读 & 可写
     * @example `readwrite`
     */
    LocalDrive: string;
}
