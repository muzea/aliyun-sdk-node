export interface DeleteMediaMarksResponse {
    /**
     * 请求ID
     * @example `******11-DB8D-4A9A-875B-275798******`
     */
    RequestId: string;
    /**
     * 媒资ID
     * @example `****019b82e24b37a1c2958dec38****`
     */
    MediaId: string;
    /**
     * 删除的点位ID，以逗号分割
     * @example `mark-f82d*****4994b0915948ef7e16,mark-3d56d*****4c8fa9ae2a1f9e5d2d60`
     */
    MediaMarkIds: string;
}
