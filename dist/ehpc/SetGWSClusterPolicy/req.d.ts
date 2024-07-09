export interface SetGWSClusterPolicyRequest {
    /**
     * 可视化服务集群ID。
     * @example `gws-rhz99q8rc****`
     */
    "ClusterId": string;
    /**
     * 剪贴板权限。取值范围：
     * - read：只读。可以将本地内容复制到云桌面，不能将云桌面内容复制到本地。
     * - readwrite：读写。可以将本地内容复制到云桌面，也可以将云桌面内容复制到本地。
     * - off：关闭。云桌面和本地之间无法进行复制操作。
     * 默认值：off
     * @example `readwrite`
     */
    "Clipboard": string;
    /**
     * 本地磁盘映射权限。取值范围：
     * - read：只读。云桌面上有本地磁盘的映射，但是只能读取（复制）本地文件，不能修改本地文件。
     * - readwrite：读写。云桌面上有本地磁盘的映射，可以读取（复制）本地文件，也可以修改本地文件。
     * - off：关闭。云桌面上没有本地磁盘的映射。
     * 默认值：off
     * @example `read`
     */
    "LocalDrive": string;
    /**
     * USB重定向。取值范围：
     * - on：开启
     * - off：关闭
     * 默认值：off
     * @example `on`
     */
    "UsbRedirect": string;
    /**
     * 水印。取值范围：
     * - on：开启
     * - off：关闭
     * 默认值：off
     * @example `on`
     */
    "Watermark": string;
    /**
     * UDP端口。取值范围：
     * - on：打开
     * - off：关闭
     * 默认值：on
     * @example `on`
     */
    "UdpPort"?: string;
    /**
     * 是否支持异步调用模式：
     * - false：不支持，当本次请求调用完成后，才返回结果。
     * - true：支持，无需等待本次请求调用完成，立即返回结果。
     * 默认值：false
     * @example `true`
     */
    "AsyncMode"?: boolean;
}
