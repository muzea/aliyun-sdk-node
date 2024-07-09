export interface SetClusterPolicyRequest {
    /**
     * 集群 id
     * @example `gws-xxx`
     */
    "ClusterId": string;
    /**
     * USB 重定向：
     * * off：关闭
     * * on：打开
     * @example `on`
     */
    "UsbRedirect": string;
    /**
     * 水印：
     * * off：关闭
     * * on：打开。水印为星状覆盖屏幕的两行半透明文字，格式为集群信息与主机信息，类似
     *     * gws-xxx@gws
     *     * c0-i00-xx-t6
     * @example `off`
     */
    "Watermark": string;
    /**
     * 本地磁盘映射：
     * * off：关闭
     * * read：只可读
     * * readwrite：可读写
     * @example `readwrite`
     */
    "LocalDrive": string;
    /**
     * 剪贴板：
     * * off：关闭
     * * read：只可读
     * * write：只可写
     * * readwrite：可读写
     * @example `read`
     */
    "Clipboard": string;
    /**
     * udp 端口：
     * * on（默认）：打开。推荐配置为 on，带宽占用与网络稳定性更好。
     * * off：关闭。定位 udp 相关的网络问题时，有时需要在这里设置 off，设置后安全组入方向的 1494 / 2598 的规则会被移除
     * @example `off`
     */
    "UdpPort"?: string;
    /**
     * 音频：
     * * on（默认）：打开，客户端可以听到云桌面内部的声音。
     * * off：关闭，客户端听不到云桌面内部的声音。
     * @example `on`
     */
    "Audio"?: string;
    /**
     * 域名白名单
     * * 白名单为空时，允许访问所有域名
     * * 白名单非空时，仅允许访问列表中的域名
     * * 支持 `*` 通配符
     * * 多条域名规则之间用逗号分隔
     * * 设置后对当前集群的所有实例即时生效
     * @example `*.abc.com,*.xyz.com`
     */
    "DomainList"?: string;
    /**
     * 异步模式调用：
     * * false（默认）：命令执行完成后，api 才会返回
     * * true：命令后台执行，api 立即返回。调用方需要记录返回值中的 TaskId，然后来 DescribeClusterPolicy 查询命令的执行状态。
     * @example `false`
     */
    "AsyncMode"?: boolean;
}
