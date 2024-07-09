export interface DetectLungNoduleResponse {
    /**
     * 请求ID。
     * @example `9889ef5b-b973-4dd0-9f26-3b9cc489c436`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     * 该数据需要在异步任务执行成功后，通过调用[GetAsyncJobResult](~~607824~~)接口，对其Result字段进行JSON反序列化之后得到。
     */
    Data: {
        /**
         * 本次影像分析的分序列的结果，只支持单序列，故该jsonArray的长度为1。数组元素为单个序列的检测结果，由analysisResult和seriesInstanceUid构成。
         */
        Series: {
            /**
             * 本次分析影像的序列ID。
             * @example `1.3.6.1.4.1.14519.5.2.1.6279.6001.179049373636438705059720603192`
             */
            SeriesInstanceUid: string;
            /**
             * 结节描述。
             */
            Elements: {
                /**
                 * 结节在物理坐标系中的z轴坐标值。
                 * @example `-46.81608170781766`
                 */
                Z: number;
                /**
                 * 肺叶分段。取值包括：up（上叶）、middle（中叶）、down（下叶）及unknown（未知）。
                 * @example `up`
                 */
                Lobe: string;
                /**
                 * 平均CT值，单位为HU。
                 * @example `261.37589112119247`
                 */
                MeanValue: number;
                /**
                 * 结节在图像坐标系中的z轴坐标值。
                 * @example `20.434030793471255`
                 */
                ImageZ: number;
                /**
                 * 结节在肺叶的位置。取值包括：left（左肺）、right（右肺）及unknown（未知）。
                 * @example `left`
                 */
                Lung: string;
                /**
                 * 结节分类的置信度。
                 * @example `0.7012705768508907`
                 */
                Confidence: number;
                /**
                 * 结节中心位置所在帧的ID标识。
                 * @example `1.3.6.1.4.1.14519.5.2.1.6279.6001.261151233960269013402330853013`
                 */
                SOPInstanceUID: string;
                /**
                 * 结节在图像坐标系中的x轴坐标值。
                 * @example `308.9676976455463`
                 */
                ImageX: number;
                /**
                 * 结节在物理坐标系中的y轴坐标值。
                 * @example `-32.23147700784307`
                 */
                Y: number;
                /**
                 * 结节分类，取值包括：
                 * - 0：ggo（磨玻璃影）
                 * - 1：part-solid（部分实性）
                 * - 2：solid（实性）
                 * - 3：unknown（未知）
                 * - 4：calc（钙化）
                 * @example `1`
                 */
                Category: string;
                /**
                 * 结节体积，单位为mm³。
                 * @example `10959.220491175074`
                 */
                Volume: number;
                /**
                 * 结节在图像坐标系中的y轴坐标值。
                 * @example `198.3552282631497`
                 */
                ImageY: number;
                /**
                 * 结节的直径。
                 * @example `9.730626493692398`
                 */
                Diameter: number;
                /**
                 * 结节在物理坐标系中的x轴坐标值。
                 * @example `51.24291240631416`
                 */
                X: number;
                /**
                 * 结节最大径位置所在帧的ID标识。
                 * @example `1.3.6.1.4.1.14519.5.2.1.6279.6001.468208655866166788627471660948`
                 */
                RecistSOPInstanceUID: string;
                MajorAxis: number[];
                MinorAxis: number[];
                /**
                 * 结节为恶性的置信度。取值范围0~1。
                 * @example `0.173`
                 */
                Risk: number;
            }[];
            /**
             * 1
             */
            Origin: number[];
            /**
             * 该DICOM序列经过AI分析后AI服务给出的参考报告。
             * @example `肺部见1个实性结节，直径约为25.60mm，体积为11512.06mm³，平均CT值为-6.90HU。`
             */
            Report: string;
            /**
             * 1
             */
            Spacing: number[];
        }[];
    };
    /**
     * 提交异步任务后的提示信息。
     * @example `该调用为异步调用，任务已提交成功，请以requestId的值作为jobId参数调用同类目下GetAsyncJobResult接口查询任务执行状态和结果。`
     */
    Message: string;
}
