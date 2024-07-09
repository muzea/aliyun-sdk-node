export interface DetectLiverSteatosisResponse {
    /**
     * 请求ID。
     * @example `39C848F7-D814-1A06-AE0D-AFC706B9700F`
     */
    RequestId: string;
    /**
     * 该数据需要在异步任务执行成功后，通过调用[GetAsyncJobResult](~~607824~~)接口，对其Result字段进行JSON反序列化之后得到。
     */
    Data: {
        /**
         * 脂肪肝检出结果。
         */
        Detections: {
            /**
             * 肝脏ROI1中心坐标。
             */
            ROI1Center: number[];
            /**
             * 肝脏ROI2中心坐标。
             */
            ROI2Center: number[];
            /**
             * 肝脏ROI3中心坐标。
             */
            ROI3Center: number[];
            /**
             * 脾脏ROI中心坐标。
             */
            SpleenCenter: number[];
            /**
             * 圆形ROI半径。
             * @example `1.0`
             */
            Radius: number;
            /**
             * 肝脏ROI对应的slice坐标。
             * @example `12.0`
             */
            LiverSlice: number;
            /**
             * 脾脏ROI对应的slice坐标。
             * @example `9.0`
             */
            SpleenSlice: number;
            /**
             * 肝脏体积测量。单位：cm³（立方厘米）。
             * @example `1059.4175610625439`
             */
            LiverVolume: number;
            /**
             * 脾脏体积测量。单位：cm³（立方厘米）。
             * @example `156.01873229470647`
             */
            SpleenVolume: number;
            /**
             * 肝脏衰减值。
             * @example `62.07644147383561`
             */
            LiverHU: number;
            /**
             * 脾脏衰减值。
             * @example `53.86993919857013`
             */
            SpleenHU: number;
            /**
             * 肝脏局部ROI1衰减值。
             * @example `63.50222396850586`
             */
            LiverROI1: number;
            /**
             * 肝脏局部ROI2衰减值。
             * @example `62.23713684082031`
             */
            LiverROI2: number;
            /**
             * 肝脏局部ROI3衰减值。
             * @example `59.78181838989258`
             */
            LiverROI3: number;
            /**
             * 脾脏局部ROI衰减值。
             * @example `50.553409576416016`
             */
            SpleenROI: number;
            /**
             * 肝脾衰减差。
             * @example `8.206502275265478`
             */
            LiverSpleenDifference: number;
            /**
             * 肝脾衰减比。
             * @example `1.15233917834983`
             */
            LiverSpleenRatio: number;
            /**
             * 检测结果等级，包括无，轻，中，重。
             * @example `Mod`
             */
            Prediction: string;
            /**
             * 脂肪肝概率。
             * @example `0.9457855224609375`
             */
            Probability: number;
        }[];
        /**
         * 每个像素之间的物理距离间隔。
         */
        Spacing: number[];
        /**
         * 像素坐标系原点在物理坐标系中的位置。
         */
        Origin: number[];
    };
    /**
     * 提交异步任务后的提示信息。
     * @example `该调用为异步调用，任务已提交成功，请以requestId的值作为jobId参数调用同类目下GetAsyncJobResult接口查询任务执行状态和结果。`
     */
    Message: string;
}
