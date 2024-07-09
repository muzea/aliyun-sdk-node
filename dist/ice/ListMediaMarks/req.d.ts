export interface ListMediaMarksRequest {
    /**
     * 媒资ID
     * @example `411bed50018971edb60b0764a0ec6***`
     */
    "MediaId"?: string;
    /**
     * 标记ID，支持多值，多值以逗号分隔（此入参已废弃）
     * @example `mark-f82d*****4994b0915948ef7e16,mark-3d56d*****4c8fa9ae2a1f9e5d2d60`
     */
    "MediaMarkIds"?: string;
}
