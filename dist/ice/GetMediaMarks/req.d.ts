export interface GetMediaMarksRequest {
    /**
     * 媒资ID
     * @example `****20b48fb04483915d4f2cd8ac****`
     */
    "MediaId"?: string;
    /**
     * 标记ID，支持多值，多值以逗号分隔。
     * @example `mark-f82d*****4994b0915948ef7e16,mark-3d56d*****4c8fa9ae2a1f9e5d2d60`
     */
    "MediaMarkIds"?: string;
}
