export interface DeleteMediaMarksRequest {
    /**
     * 媒资ID
     * @example `****c469e944b5a856828dc2****`
     */
    "MediaId"?: string;
    /**
     * 标记ID，支持多值，多值以逗号分隔。
     * 如果 MediaMarkIds 为空，默认删除媒资所有的点位信息。
     * @example `mark-f82d*****4994b0915948ef7e16,mark-3d56d*****4c8fa9ae2a1f9e5d2d60`
     */
    "MediaMarkIds"?: string;
}
