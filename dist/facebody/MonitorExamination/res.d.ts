export interface MonitorExaminationResponse {
    /**
     * 请求ID。
     * @example `D0F6EB94-73B6-4CB8-B266-22D2F221C475`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 中心人物的人脸信息。当请求参数Type取值为1时显示该参数。
         */
        FaceInfo: {
            /**
             * 人脸完整度分数，取值范围\(0,1)。
             * @example `1`
             */
            Completeness: number;
            /**
             * 检测到的人脸人数，0代表未检测到考生人脸。
             * @example `1`
             */
            FaceNumber: number;
            /**
             * 正对摄像机时3个角度都为0， 取值范围正负90度之间。
             */
            Pose: {
                /**
                 * 上下俯仰角角度，抬头为正值，低头为负值。
                 * @example `-0.9185499548912048`
                 */
                Pitch: number;
                /**
                 * 人脸在画面中顺时针转动为正值，逆时针转动为负值。
                 * @example `-0.18541647493839264`
                 */
                Roll: number;
                /**
                 * 向左看为正值，向右看为负值。
                 * @example `8.095342636108398`
                 */
                Yaw: number;
            };
        };
        /**
         * 中心人物的属性行为信息。当请求参数Type取值为1时显示该参数。
         */
        PersonInfo: {
            /**
             * 打电话。
             */
            CellPhone: {
                /**
                 * 打电话的概率分数，取值范围\(0,1)。
                 * @example `0.39076218008995056`
                 */
                Score: number;
                /**
                 * 建议阈值。
                 * > 仅作为参考，实际应用中根据测试情况选取合适的Score阈值即可。
                 * @example `0.6`
                 */
                Threshold: number;
            };
            /**
             * 戴耳机。
             */
            EarPhone: {
                /**
                 * 戴耳机的概率分数，取值范围\(0,1)。
                 * @example `0.7980290651321411`
                 */
                Score: number;
                /**
                 * 建议阈值。
                 * > 仅作为参考，实际应用中根据测试情况选取合适的Score阈值即可。
                 * @example `0.6`
                 */
                Threshold: number;
            };
            /**
             * 检测到的总人数，0代表未检测到考生。
             * @example `1`
             */
            PersonNumber: number;
        };
        /**
         * 屏幕截图包含聊天工具的概率，取值范围\(0,1)。
         * 当请求参数Type取值为0时显示该参数。
         * @example `0.28805577754974365`
         */
        ChatScore: number;
        /**
         * 建议阈值，取值范围\(0,1)。当ChatScore大于阈值时，系统判定输入屏幕截图中包含聊天工具。
         * 当请求参数Type取值为0时显示该参数。
         * @example `0.5`
         */
        Threshold: number;
    };
}
