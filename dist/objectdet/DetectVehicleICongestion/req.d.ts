export interface DetectVehicleICongestionRequest {
    /**
     * 图像URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/objectdet/DetectVehicleICongestion/DetectVehicleICongestion1.jpg`
     */
    "ImageURL": string;
    /**
     * 多个区域。格式为[RoadRegion\_1, RoadRegion\_2, ..., RoadRegion\_N]。
     */
    "RoadRegions": {
        /**
         * 任意四边形的四个顶点的坐标X和Y，格式为`[x1,y1,x2,y2,x3,y3,x4,y4]`。
         */
        RoadRegion: {
            /**
             * 四边形的顶点坐标。
             */
            Point: {
                /**
                 * 坐标点的X值。
                 * @example `400`
                 */
                X: number;
                /**
                 * 坐标点的Y值。
                 * @example `400`
                 */
                Y: number;
            };
        }[];
    }[];
    /**
     * 前一帧画面与各个指定区域相交集的车辆检测框对应的车辆特征。
     */
    "PreRegionIntersectFeatures"?: {
        /**
         * 特征为Base64编码的字符串。
         */
        Features: string[];
    }[];
}
