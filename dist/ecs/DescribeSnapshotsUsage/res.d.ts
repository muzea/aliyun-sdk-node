export interface DescribeSnapshotsUsageResponse {
    /**
     * 当前地域下已产生的快照容量，单位Byte。
     * @example `122`
     */
    SnapshotSize: number;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 当前地域下的快照总数。
     * @example `5`
     */
    SnapshotCount: number;
}
