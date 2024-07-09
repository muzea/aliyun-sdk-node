export interface ExportDesktopGroupInfoResponse {
    /**
     * 云电脑池列表导出文件的下载地址。导出文件包含的云电脑池详细信息包括：
     * - 云电脑池ID/名称
     * - 办公网络ID/名称
     * - 云电脑池模板
     * - CPU/内存
     * - 系统盘/数据盘
     * - 安全策略名称
     * - 当前授权用户数量
     * - 付费类型
     * - 创建时间
     * - 到期时间
     * @example `https://cn-hangzhou-servicemanager.oss-cn-hangzhou.aliyuncs.com/A0_DESKTOP/EDS_CloudDesktopGroups_202203********_xBjqdCT***.xlsx?*********`
     */
    Url: string;
    /**
     * 请求ID。
     * @example `24E05D3E-08F4-551E-B1F0-F6D84EE0BCCC`
     */
    RequestId: string;
}
