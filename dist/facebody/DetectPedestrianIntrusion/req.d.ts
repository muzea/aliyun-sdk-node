export interface DetectPedestrianIntrusionRequest {
    /**
     * 图像URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/facebody/DetectPedestrianIntrusion/DetectPedestrianIntrusion2.jpg`
     */
    "ImageURL": string;
    /**
     * 区域信息。
     */
    "DetectRegion": {
        /**
         * 矩形区域。当RegionType为rectangel时必填。
         */
        Rect: {
            /**
             * 矩形区域的左上角横轴坐标。
             * @example `0`
             */
            Left: number;
            /**
             * 矩形区域的左上角纵轴坐标。
             * @example `0`
             */
            Top: number;
            /**
             * 矩形区域的右下角横轴坐标。
             * @example `300`
             */
            Right: number;
            /**
             * 矩形区域的右下角纵轴坐标。
             * @example `300`
             */
            Bottom: number;
        };
        /**
         * 周界/界线。当RegionType为line时必填。
         */
        Line: {
            /**
             * 线段的开始顶点的横轴坐标。
             * @example `0`
             */
            X1: number;
            /**
             * 线段的开始顶点的纵轴坐标。
             * @example `0`
             */
            Y1: number;
            /**
             * 线段的结束顶点的横轴坐标。
             * @example `300`
             */
            X2: number;
            /**
             * 线段的结束顶点的纵轴坐标。
             * @example `300`
             */
            Y2: number;
        };
    }[];
    /**
     * 区域类型。
     * - line：周界/界线，为一条线段。
     * - rectangle：矩形区域，为一个矩形。
     * @example `rectangle`
     */
    "RegionType": string;
}
