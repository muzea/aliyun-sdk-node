export interface DetectIPCObjectResponse {
    /**
     * 请求ID。
     * @example `7AE23740-A3E5-5607-8E10-895DCBD4C260`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 检测到的目标集合，如果没有目标则为空。
         */
        Elements: {
            /**
             * 检测框对应的物体名称，取值如下：
             * - PERSON：人物
             * - VEHICLE：车辆
             * - CAT：猫
             * - DOG：狗
             * @example `DOG`
             */
            Type: string;
            /**
             * 检测框的置信度，取值范围\[0.0,1.0]。
             * @example `0.7138671875`
             */
            Score: number;
            /**
             * 检测框坐标。
             */
            Box: number[];
            /**
             * 目标检测框的面积大小和图像大小的比例。取值范围\[0.0,1.0]，1.0表示全屏。
             * @example `0.8566723958333333`
             */
            TargetRate: number;
        }[];
        /**
         * 图像的宽度，单位像素。
         * @example `1600`
         */
        Width: number;
        /**
         * 图像的高度，单位像素。
         * @example `1200`
         */
        Height: number;
    };
}
