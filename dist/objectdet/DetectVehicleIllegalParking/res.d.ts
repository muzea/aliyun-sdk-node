export interface DetectVehicleIllegalParkingResponse {
    /**
     * 请求ID。
     * @example `DB882EDD-991A-5A0C-A19B-CC7C4BA65E35`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 车辆检测框的集合。
         */
        Elements: {
            /**
             * 检测框坐标，格式为`[left, top, right, bottom]`。
             */
            Boxes: {
                /**
                 * 矩形区域的左上角横轴坐标。
                 * @example `413`
                 */
                Left: number;
                /**
                 * 矩形区域的左上角纵轴坐标。
                 * @example `138`
                 */
                Top: number;
                /**
                 * 矩形区域的右下角横轴坐标。
                 * @example `499`
                 */
                Right: number;
                /**
                 * 矩形区域的右下角纵轴坐标。
                 * @example `268`
                 */
                Bottom: number;
            }[];
            /**
             * 检测框的置信度，范围为`[0,1]`。
             * @example `0.9599609375`
             */
            Score: number;
            /**
             * 检测框对应的物体。取值仅为`vehicle`。
             * @example `vehicle`
             */
            TypeName: string;
            /**
             * 检测框ID。
             * @example `1`
             */
            Id: number;
        }[];
        /**
         * 与各个给定区域相交集的车辆检测框对应的车辆特征。
         * 例如，返回结果为[ {"Ids":[1,3]}, {"Ids":[2,4]} ]，其中{"Ids":[1,3]}是与区域1相交集的车辆检测框的ID， {"Ids":[2,4]}是与区域2相交集的车辆检测框的ID。当车辆出现在给定区域内，说明存在车辆占道的情况。
         * 除了**RegionIntersects**里包含的ID的检测框外，其它的检测框为区域外的检测框。
         */
        RegionIntersects: {
            /**
             * 与各个指定区域相交集的车辆检测框的多个ID。
             */
            Ids: number[];
        }[];
    };
}
