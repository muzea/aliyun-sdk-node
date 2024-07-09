export interface AddMediaMarksResponse {
    /**
     * 请求Id
     * @example `771A1414-27BF-53E6-AB73-EFCB*****ACF`
     */
    RequestId: string;
    /**
     * 媒资ID
     * @example `53afdf003a******6a16b5feac6402`
     */
    MediaId: string;
    /**
     * 添加的标记Id
     * @example `mark-f82d*****4994b0915948ef7e16,mark-3d56d*****4c8fa9ae2a1f9e5d2d60`
     */
    MediaMarkIds: string;
}
