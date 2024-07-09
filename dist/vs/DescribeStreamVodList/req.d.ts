export interface DescribeStreamVodListRequest {
    /**
     * 流ID。
     * @example `18526049*****219118918-cn-beijing`
     */
    "Id": string;
    /**
     * 点播记录开始时间点（uinx时间戳，单位：秒）
     * @example `1639077653`
     */
    "StartTime": number;
    /**
     * 点播记录结束时间点（uinx时间戳，单位：秒）
     * @example `1634873413`
     */
    "EndTime": number;
}
