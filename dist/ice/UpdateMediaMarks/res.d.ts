export interface UpdateMediaMarksResponse {
    /**
     * 请求ID
     * @example `******11-DB8D-4A9A-875B-275798******`
     */
    RequestId: string;
    /**
     * 媒资ID
     * @example `53afdf003a******6a16b5feac6402`
     */
    MediaId: string;
    /**
     * 修改成功的标记ID
     * @example `mark-f82d*****4994b0915948ef7e16,mark-3d56d*****4c8fa9ae2a1f9e5d2d60`
     */
    MediaMarkIds: string;
}
