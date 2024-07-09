export interface GetMediaAuditResultDetailResponse {
    /**
     * 请求ID。
     * @example `6438BD76-D523-46FC-956F-****`
     */
    RequestId: string;
    /**
     * 审核结果详情。
     */
    MediaAuditResultDetail: {
        /**
         * 视频审核结果截图总数量。
         * @example `2`
         */
        Total: number;
        /**
         * 视频审核结果详情列表。
         */
        List: {
            /**
             * 暴恐涉政审核结果的视频截图的命中分数。取值为：`[0-100]`，精度小数点后10位。命中结果为对应分类Label的概率，值越高则命中准确性越高。
             * @example `100.00`
             */
            TerrorismScore: string;
            /**
             * 广告审核结果分类。取值：
             * - **normal**：正常。
             * - **ad**：其他广告。
             * - **politics**：文字含涉政内容。
             * - **porn**：文字含涉黄内容。
             * - **abuse**：文字含辱骂内容。
             * - **terrorism**：文字含暴恐内容。
             * - **contraband**：文字含违禁内容。
             * - **spam**：文字含其他垃圾内容。
             * - **npx**：牛皮癣广告。
             * - **qrcode**：含二维码。
             * - **programCode**：含小程序码。
             * @example `normal`
             */
            AdLabel: string;
            /**
             * 鉴黄审核结果分类。取值：
             * - **normal**：普通。
             * - **porn**：色情。
             * - **sexy**：性感。
             * @example `normal`
             */
            PornLabel: string;
            /**
             * 鉴黄审核结果的视频截图的命中分数。取值为：`[0-100]`，精度小数点后10位。命中结果为对应分类Label的概率，值越高则命中准确性越高。
             * @example `100.00`
             */
            PornScore: string;
            /**
             * 不良场景审核结果分类。取值：
             * - **normal**：正常。
             * - **meaningless**：图片中无内容（例如黑屏、白屏）。
             * - **PIP**：画中画。
             * - **smoking**：吸烟。
             * - **drivelive**：车内直播。
             * @example `normal`
             */
            LiveLabel: string;
            /**
             * 视频截图的地址。
             * @example `http://temp-testbucket.oss-cn-shanghai.aliyuncs.com/aivideocensor/****.jpg`
             */
            Url: string;
            /**
             * 视频截图在视频中的位置。单位：毫秒。
             * @example `3005`
             */
            Timestamp: string;
            /**
             * 广告审核结果的视频截图的命中分数。取值为：`[0-100]`，精度小数点后10位。命中结果为对应分类Label的概率，值越高则命中准确性越高。
             * @example `100`
             */
            AdScore: string;
            /**
             * 不良场景审核结果的视频截图的命中分数。取值为：`[0-100]`，精度小数点后10位。命中结果为对应分类Label的概率，值越高则命中准确性越高。
             * @example `100`
             */
            LiveScore: string;
            /**
             * Logo审核结果的视频截图的命中分数。取值为：`[0-100]`，精度小数点后10位。命中结果为对应分类Label的概率，值越高则命中准确性越高。
             * @example `100`
             */
            LogoScore: string;
            /**
             * Logo审核结果分类。取值：
             * - **normal**：正常。
             * - **TV**：含受管控的Logo。
             * - **trademark**：含商标。
             * @example `normal`
             */
            LogoLabel: string;
            /**
             * 暴恐涉政审核结果。取值范围：
             * - **normal**：正常。
             * - **bloody**：血腥。
             * - **explosion**：爆炸烟光。
             * - **outfit**：特殊装束。
             * - **logo**：特殊标识。
             * - **weapon**：武器。
             * - **politics**：渉政。
             * - **violence**：打斗。
             * - **crowd**：聚众。
             * - **parade**：游行。
             * - **carcrash**：车祸现场。
             * - **flag**：旗帜。
             * - **location**：地标。
             * - **others**：其它。
             * @example `normal`
             */
            TerrorismLabel: string;
        }[];
    };
}
