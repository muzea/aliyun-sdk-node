export interface PedestrianDetectAttributeResponse {
    /**
     * 请求ID。
     * @example `4F609A30-F645-481E-A513-CADAA14DFB0A`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 行人属性。
         */
        Attributes: {
            /**
             * 性别。
             */
            Gender: {
                /**
                 * 置信度。
                 * @example `0.97989875078201294`
                 */
                Score: number;
                /**
                 * male（男）；female（女）。
                 * @example `female`
                 */
                Name: string;
            };
            /**
             * 人体朝向。
             */
            Orient: {
                /**
                 * 置信度。
                 * @example `0.97838658094406128`
                 */
                Score: number;
                /**
                 * Front（正向）；Side（侧向）；Back（背面）。
                 * @example `Front`
                 */
                Name: string;
            };
            /**
             * 年龄。
             */
            Age: {
                /**
                 * 置信度。
                 * @example `0.99590516090393066`
                 */
                Score: number;
                /**
                 * AgeOver60（大于60岁）；Age18-60（18-60岁之间）；AgeLess18（小于18岁）。
                 * @example `Age18-60`
                 */
                Name: string;
            };
            /**
             * 上衣种类。
             */
            UpperWear: {
                /**
                 * 置信度。
                 * @example `0.89291918277740479`
                 */
                Score: number;
                /**
                 * LongSleeve（长袖）；ShortSleeve（短袖）。
                 * @example `ShortSleeve`
                 */
                Name: string;
            };
            /**
             * 眼镜。
             */
            Glasses: {
                /**
                 * 置信度。
                 * @example `0.87284471094608307`
                 */
                Score: number;
                /**
                 * Yes（戴眼镜）；No（不戴眼镜）。
                 * @example `No`
                 */
                Name: string;
            };
            /**
             * 下衣种类。
             */
            LowerWear: {
                /**
                 * 置信度。
                 * @example `0.6424860954284668`
                 */
                Score: number;
                /**
                 * Trousers（长裤）；Shorts（短裤）；Skirt&Dress（裙子）。
                 * @example `Trousers`
                 */
                Name: string;
            };
            /**
             * 下衣颜色。
             */
            LowerColor: {
                /**
                 * 置信度。
                 * @example `0.69961744546890259`
                 */
                Score: number;
                /**
                 * 黑，灰，蓝，绿，白，紫，红，棕，黄，粉，不确定。
                 * @example `黑`
                 */
                Name: string;
            };
            /**
             * 帽子。
             */
            Hat: {
                /**
                 * 置信度。
                 * @example `0.98272394016385078`
                 */
                Score: number;
                /**
                 * Yes（戴帽子）；No（不戴帽子）。
                 * @example `No`
                 */
                Name: string;
            };
            /**
             * 手提包。
             */
            Handbag: {
                /**
                 * 置信度。
                 * @example `0.55011671781539917`
                 */
                Score: number;
                /**
                 * Yes（有手提包）；No（无手提包）。
                 * @example `Yes`
                 */
                Name: string;
            };
            /**
             * 背包。
             */
            Backpack: {
                /**
                 * 置信度。
                 * @example `0.96486538648605347`
                 */
                Score: number;
                /**
                 * Yes（有背包）；No（无背包）。
                 * @example `No`
                 */
                Name: string;
            };
            /**
             * 上衣颜色。
             */
            UpperColor: {
                /**
                 * 置信度。
                 * @example `0.97796273231506348`
                 */
                Score: number;
                /**
                 * 黑，灰，蓝，绿，白，紫，红，棕，黄，粉，不确定。
                 * @example `黄`
                 */
                Name: string;
            };
            /**
             * 肩挎包。
             */
            ShoulderBag: {
                /**
                 * 置信度。
                 * @example `0.91198787838220596`
                 */
                Score: number;
                /**
                 * Yes（有肩挎包）；No（无肩挎包）。
                 * @example `No`
                 */
                Name: string;
            };
        }[];
        /**
         * 检测到行人边界框的坐标。
         */
        Boxes: {
            /**
             * 边框右下角x坐标值。
             * @example `584`
             */
            BottomRightX: number;
            /**
             * 边框左上角y坐标值。
             * @example `27`
             */
            TopLeftY: number;
            /**
             * 边界框置信度。
             * @example `0.88381063938140869`
             */
            Score: number;
            /**
             * 边框左上角x坐标值。
             * @example `36`
             */
            TopLeftX: number;
            /**
             * 边框右下角y坐标值。
             * @example `218`
             */
            BottomRightY: number;
        }[];
        /**
         * 检测到的行人个数，取值为正整数。
         * @example `1`
         */
        PersonNumber: number;
        /**
         * 原图的宽度，单位像素。
         * @example `264`
         */
        Width: number;
        /**
         * 原图的高度，单位像素。
         * @example `584`
         */
        Height: number;
    };
}
