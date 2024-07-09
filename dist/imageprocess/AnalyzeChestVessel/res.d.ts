export interface AnalyzeChestVesselResponse {
    /**
     * 请求ID。
     * @example `B87D013B-F25F-47DC-ABE1-440F4837AFD2`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。该数据需要在异步任务执行成功后，通过调用[GetAsyncJobResult](~~607824~~)接口，对其Result字段进行JSON反序列化之后得到。
     */
    Data: {
        /**
         * 主动脉分析结果。
         */
        AortaInfo: {
            /**
             * 主动脉血管最大截面积在**Area**中的索引。
             * @example `416`
             */
            MaxAreaIndex: number;
            /**
             * 在**Area**中，主动脉血管截面积中的最大值。
             * @example `2722`
             */
            MaxArea: number;
            /**
             * 最大截面积处的血管最大直径，单位为毫米。
             * @example `63`
             */
            MaxDiameter: number;
            /**
             * 当前血管在血管分割Mask中的Label值。AortaInfo中取值为2。
             * @example `2`
             */
            LabelValue: number;
            /**
             * 在病人坐标系下，血管中心线上从起始点到终点每隔1毫米的点对应的XYZ三维坐标序列。
             */
            Coordinates: number[][];
            /**
             * 1
             */
            Area: number[];
        };
        /**
         * 肺动脉分析结果。
         */
        PulmonaryInfo: {
            /**
             * 肺动脉血管最大截面积在**Area**中的索引。
             * @example `0`
             */
            MaxAreaIndex: number;
            /**
             * 在**Area**中，肺动脉血管截面积中的最大值。
             * @example `928`
             */
            MaxArea: number;
            /**
             * 最大截面积处的血管最大直径，单位为毫米。
             * @example `42`
             */
            MaxDiameter: number;
            /**
             * 当前血管在血管分割Mask中的Label值。PulmonaryInfo中取值为1。
             * @example `1`
             */
            LabelValue: number;
            /**
             * 在病人坐标系下，血管中心线上从起始点到终点每隔1毫米的点对应的XYZ三维坐标序列。
             */
            Coordinates: number[][];
            /**
             * 1
             */
            Area: number[];
            /**
             * 主动脉中心线上最靠近肺动脉截面积最大处的点处的主动脉截面积。
             * @example `2439`
             */
            NearestAortaArea: number;
        };
        /**
         * CPR相关结果下载地址。
         * > 有效时间为5分钟，5分钟后链接失效，需要重新生成。
         * @example `http://vibktprfx-prod-prod-aic-med-cn-shanghai.oss-cn-shanghai.aliyuncs.com/ct_artery_aa_ph/local_test/2021-07-08/6C4713DF-F548-47DF-A456-5DA1C8334444_result_compressed.tgz?Expires=1625732732&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSR****&Signature=5UKVmLfM7GWllIcPr9a6dKz%2B5h****`
         */
        ResultURL: string;
    };
    /**
     * 提交异步任务后的提示信息。
     * @example `该调用为异步调用，任务已提交成功，请以requestId的值作为jobId参数调用同类目下GetAsyncJobResult接口查询任务执行状态和结果。`
     */
    Message: string;
}
