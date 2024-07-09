export interface DescribeGWSClusterPolicyResponse {
    /**
     * 水印。可能值：
     * - on：开启
     * - off：关闭
     * @example `on`
     */
    Watermark: string;
    /**
     * 剪贴板权限。可能值：
     * - read：只读。可以将本地内容复制到云桌面，不能将云桌面内容复制到本地。
     * - readwrite：读写。可以将本地内容复制到云桌面，也可以将云桌面内容复制到本地。
     * - off：关闭。云桌面和本地之间无法进行复制操作。
     * @example `read`
     */
    Clipboard: string;
    /**
     * 请求ID。
     * @example `7afc5a17-e60d-4a2a-85d6-7c9d4a81d65e`
     */
    RequestId: string;
    /**
     * USB重定向。可能值：
     * - on：开启
     * - off：关闭
     * @example `on`
     */
    UsbRedirect: string;
    /**
     * 本地磁盘映射权限。可能值：
     * - read：只读。云桌面上有本地磁盘的映射，但是只能读取（复制）本地文件，不能修改本地文件。
     * - readwrite：读写。云桌面上有本地磁盘的映射，可以读取（复制）本地文件，也可以修改本地文件。
     * - off：关闭。云桌面上没有本地磁盘的映射。
     * @example `off`
     */
    LocalDrive: string;
}
