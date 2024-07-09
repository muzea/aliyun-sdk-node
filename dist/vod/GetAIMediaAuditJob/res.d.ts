export interface GetAIMediaAuditJobResponse {
    /**
     * 请求ID。
     * @example `EAA3E96A-02E2-41*****85-08E1D568ED3A`
     */
    RequestId: string;
    /**
     * 智能审核作业信息。
     */
    MediaAuditJob: {
        /**
         * 作业开始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2017-01-11T12:00:00Z`
         */
        CreationTime: string;
        /**
         * 作业类型。目前仅支持"智能审核"一种类型。
         * @example `AIMediaAudit`
         */
        Type: string;
        /**
         * 作业状态。取值：
         * - **success**：成功。
         * - **fail**：失败。
         * - **init**：初始化。
         * - **processing**：处理中。
         * @example `success`
         */
        Status: string;
        /**
         * 作业结束时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2017-01-11T13:00:00Z`
         */
        CompleteTime: string;
        /**
         * 作业ID。
         * @example `bdbc266af6894*****943a70176d92e9`
         */
        JobId: string;
        /**
         * 作业错误码。当Status为失败时，可关注该字段。
         * @example `0`
         */
        Code: string;
        /**
         * 作业错误信息。当Status为失败时，可关注该字段。
         * @example `OK`
         */
        Message: string;
        /**
         * 视频ID。
         * @example `fe028d09441d*****d1afffb138cd7e`
         */
        MediaId: string;
        /**
         * 作业结果数据。
         */
        Data: {
            /**
             * 审核结果建议。取值：
             * - **block**：违规。
             * - **review**：疑似。
             * - **pass**：通过。
             * @example `pass`
             */
            Suggestion: string;
            /**
             * 违规的审核内容。多个使用英文逗号（,）分隔，取值：
             * - **video**：视频。
             * - **image-cover**：封面。
             * - **text-title**：标题。
             * @example `video`
             */
            AbnormalModules: string;
            /**
             * 审核结果分类。多个使用英文逗号（,）分隔，取值：
             * - **porn**：涉黄。
             * - **terrorism**：暴恐涉政。
             * - **ad**：图文违规。
             * - **live**：不良场景。
             * - **logo**：图片logo。
             * - **audio**：语音反垃圾。
             * - **normal**：正常。
             * @example `normal`
             */
            Label: string;
            /**
             * 图片审核结果。
             */
            ImageResult: {
                /**
                 * 图片分类。取值：**cover**（封面）。
                 * @example `cover`
                 */
                Type: string;
                /**
                 * 图片的地址。
                 * @example `http://www.test.com/****.jpg`
                 */
                Url: string;
                /**
                 * 审核结果建议。取值：
                 * - **block**：违规。
                 * - **review**：疑似。
                 * - **pass**：通过。
                 * @example `pass`
                 */
                Suggestion: string;
                /**
                 * 图片审核结果分类。多个使用英文逗号（,）分隔，取值：
                 * - **porn**：涉黄。
                 * - **terrorism**：暴恐涉政。
                 * - **ad**：图文违规。
                 * - **live**：不良场景。
                 * - **logo**：图片logo。
                 * - **normal**：正常。
                 * @example `normal`
                 */
                Label: string;
                /**
                 * 图片审结结果详情。
                 */
                Result: {
                    /**
                     * 命中Label的图片的分数。取值范围：`[0, 100]`，命中结果为对应分类Label的概率，值越高则命中准确性越高。
                     * @example `0`
                     */
                    Score: string;
                    /**
                     * 审核结果建议。取值：
                     * - **block**：违规。
                     * - **review**：疑似。
                     * - **pass**：通过。
                     * @example `pass`
                     */
                    Suggestion: string;
                    /**
                     * 审核结果分类。
                     * 当scene为**porn**时，取值：
                     * - **porn**：色情。
                     * - **sexy**：性感。
                     * - **normal**：正常。
                     * 当scene为**terrorism**时，取值：
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
                     * 当scene为**ad**时，取值：
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
                     * 当scene为**live**时，取值：
                     * - **normal**：正常。
                     * - **meaningless**：图片中无内容（例如黑屏、白屏）。
                     * - **PIP**：画中画。
                     * - **smoking**：吸烟。
                     * - **drivelive**：车内直播。
                     * 当scene为**logo**时，取值：
                     * - **normal**：正常。
                     * - **TV**：含受管控的logo。
                     * - **trademark**：含商标。
                     * @example `porn`
                     */
                    Label: string;
                    /**
                     * 审核场景。取值：
                     * - **porn**：鉴黄。
                     * - **terrorism**：暴恐涉政。
                     * - **ad**：图文违规。
                     * - **live**：不良场景。
                     * - **logo**：图片logo。
                     * @example `porn`
                     */
                    Scene: string;
                }[];
            }[];
            /**
             * 文本审核结果。
             */
            TextResult: {
                /**
                 * 文本分类。取值：**title**（标题）。
                 * @example `title`
                 */
                Type: string;
                /**
                 * 审核结果建议。取值：
                 * - **block**：违规。
                 * - **review**：疑似。
                 * - **pass**：通过。
                 * @example `pass`
                 */
                Suggestion: string;
                /**
                 * 命中Label的图片的分数。取值范围：`[0, 100]`，命中结果为对应分类Label的概率，值越高则命中准确性越高。
                 * @example `100`
                 */
                Score: string;
                /**
                 * 审核结果分类。取值：
                 * - **spam**：含垃圾信息。
                 * - **ad**：广告。
                 * - **abuse**：辱骂。
                 * - **flood**：灌水。
                 * - **contraband**：违禁。
                 * - **meaningless**：无意义。
                 * - **normal**：普通。
                 * @example `ad`
                 */
                Label: string;
                /**
                 * 文本内容。
                 * @example `测试`
                 */
                Content: string;
                /**
                 * 审核场景。取固定值：**antispam**。
                 * @example `antispam`
                 */
                Scene: string;
            }[];
            /**
             * 音频审核结果。
             */
            AudioResult: {
                /**
                 * 结果分数。
                 * @example `99.91`
                 */
                Score: string;
                /**
                 * 审核结果建议。取值：
                 * - **block**：违规。
                 * - **review**：疑似。
                 * - **pass**：通过。
                 * @example `pass`
                 */
                Suggestion: string;
                /**
                 * 审核结果分类：
                 * - **normal**：正常。
                 * - **spam**：含垃圾信息。
                 * - **ad**：广告。
                 * - **politics**：涉政。
                 * - **terrorism**：暴恐。
                 * - **abuse**：辱骂。
                 * - **porn**：色情。
                 * - **flood**：灌水。
                 * - **contraband**：违禁。
                 * - **meaningless**：无意义。
                 * @example `normal`
                 */
                Label: string;
                /**
                 * 审核场景。取固定值：**antispam**。
                 * @example `antispam`
                 */
                Scene: string;
            }[];
            /**
             * 视频审核结果。
             */
            VideoResult: {
                /**
                 * 审核结果分类。取值：
                 * - **porn**：涉黄。
                 * - **terrorism**：暴恐涉政。
                 * - **ad**：图文违规。
                 * - **live**：不良场景。
                 * - **logo**：图片logo。
                 * - **normal**：正常。
                 * @example `normal`
                 */
                Label: string;
                /**
                 * 视频审核结果建议。取值：
                 * - **block**：违规。
                 * - **review**：疑似。
                 * - **pass**：通过。
                 * @example `pass`
                 */
                Suggestion: string;
                /**
                 * 暴恐涉政审核结果。
                 */
                TerrorismResult: {
                    /**
                     * 暴恐涉政审核建议。取值：
                     * - **block**（违规）
                     * - **review**（疑似）
                     * - **pass**（通过）
                     * @example `pass`
                     */
                    Suggestion: string;
                    /**
                     * 命中Label的视频截图的平均分数。取值范围：`[0, 100`]，精度小数点后10位。命中结果为对应分类Label的概率，值越高则命中准确性越高。
                     * @example `100`
                     */
                    AverageScore: string;
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
                    Label: string;
                    /**
                     * 命中Label的视频截图的最高分数。取值范围：`[0, 100`]，精度小数点后10位。命中结果为对应分类Label的概率，值越高则命中准确性越高。
                     * @example `100`
                     */
                    MaxScore: string;
                    /**
                     * 包括暴恐涉政结果各分类及其视频截图张数。
                     */
                    CounterList: {
                        /**
                         * 暴恐涉政审核结果。取值：
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
                         * @example `terrorism`
                         */
                        Label: string;
                        /**
                         * 视频截图张数。
                         * @example `0`
                         */
                        Count: number;
                    }[];
                    /**
                     * 命中Label下分数最高的视频截图信息。
                     */
                    TopList: {
                        /**
                         * 视频截图的地址。
                         * @example `http://ali*****.com/aivideocensor/yytysursrutyrxuq/****.jpg`
                         */
                        Url: string;
                        /**
                         * 命中Label的视频截图的分数。取值范围：`[0, 100`]，精度小数点后10位。命中结果为对应分类Label的概率，值越高则命中准确性越高。
                         * @example `100`
                         */
                        Score: string;
                        /**
                         * 视频截图在视频中的位置。单位：毫秒。
                         * @example `5`
                         */
                        Timestamp: string;
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
                        Label: string;
                    }[];
                };
                /**
                 * 鉴黄审核结果。
                 */
                PornResult: {
                    /**
                     * 鉴黄审核建议。取值范围：
                     * - **block**：违规。
                     * - **review**：疑似。
                     * - **pass**：通过。
                     * @example `pass`
                     */
                    Suggestion: string;
                    /**
                     * 命中Label的视频截图的平均分数。取值范围：`[0, 100`]，精度小数点后10位。命中结果为对应分类Label的概率，值越高则命中准确性越高。
                     * @example `100`
                     */
                    AverageScore: string;
                    /**
                     * 鉴黄审核结果。取值范围：
                     * - **porn**：色情。
                     * - **sexy**：性感。
                     * - **normal**：正常。
                     * @example `porn`
                     */
                    Label: string;
                    /**
                     * 命中Label的视频截图的最高分数。取值范围：`[0, 100`]，精度小数点后10位。命中结果为对应分类Label的概率，值越高则命中准确性越高。
                     * @example `100`
                     */
                    MaxScore: string;
                    /**
                     * 审核结果各分类及其视频截图的张数。
                     */
                    CounterList: {
                        /**
                         * 鉴黄审核结果。取值范围：
                         * - **porn**：色情。
                         * - **sexy**：性感。
                         * - **normal**：正常。
                         * @example `porn`
                         */
                        Label: string;
                        /**
                         * 视频截图张数。
                         * @example `0`
                         */
                        Count: number;
                    }[];
                    /**
                     * 命中Label下分数最高的视频截图信息。
                     */
                    TopList: {
                        /**
                         * 视频截图的地址。
                         * @example `http://temp-testbucket.oss-cn-shanghai.aliyuncs.com/aivideocensor/****.jpg`
                         */
                        Url: string;
                        /**
                         * 命中Label的视频截图的分数。取值范围：`[0, 100`]，精度小数点后10位。命中结果为对应分类Label的概率，值越高则命中准确性越高。
                         * @example `100`
                         */
                        Score: string;
                        /**
                         * 视频截图在视频中的位置。单位：毫秒。
                         * @example `3005`
                         */
                        Timestamp: string;
                        /**
                         * 鉴黄审核结果。取值范围：
                         * - **porn**：色情。
                         * - **sexy**：性感。
                         * - **normal**：正常。
                         * @example `porn`
                         */
                        Label: string;
                    }[];
                };
                /**
                 * 广告审核结果。
                 */
                AdResult: {
                    /**
                     * 审核结果建议。取值范围：
                     * - **block**：违规。
                     * - **review**：疑似。
                     * - **pass**：通过。
                     * @example `block`
                     */
                    Suggestion: string;
                    /**
                     * 广告审核结果平均分数。
                     * @example `100`
                     */
                    AverageScore: string;
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
                     * @example `ad`
                     */
                    Label: string;
                    /**
                     * 最高审核分数。
                     * @example `100`
                     */
                    MaxScore: string;
                    /**
                     * 审核结果各分类及其视频截图的张数。
                     */
                    CounterList: {
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
                         * @example `ad`
                         */
                        Label: string;
                        /**
                         * 视频截图张数。
                         * @example `10`
                         */
                        Count: number;
                    }[];
                    /**
                     * 命中Label下分数最高的视频截图信息。
                     */
                    TopList: {
                        /**
                         * 视频截图地址。
                         * @example `http://temp-testbucket.oss-cn-shanghai.aliyuncs.com/aivideocensor/****.jpg`
                         */
                        Url: string;
                        /**
                         * 命中Label的视频截图的分数。
                         * @example `100`
                         */
                        Score: string;
                        /**
                         * 视频截图在视频中的位置。单位：毫秒。
                         * @example `500`
                         */
                        Timestamp: string;
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
                         * @example `ad`
                         */
                        Label: string;
                    }[];
                };
                /**
                 * 不良内容审核结果。
                 */
                LiveResult: {
                    /**
                     * 审核结果建议。取值：
                     * - **block**：违规。
                     * - **review**：疑似。
                     * - **pass**：通过。
                     * @example `block`
                     */
                    Suggestion: string;
                    /**
                     * 审核结果平均分数。
                     * @example `100`
                     */
                    AverageScore: string;
                    /**
                     * 审核结果分类。取值：
                     * - **normal**：正常。
                     * - **meaningless**：图片中无内容（例如黑屏、白屏）。
                     * - **PIP**：画中画。
                     * - **smoking**：吸烟。
                     * - **drivelive**：车内直播。
                     * @example `smoking`
                     */
                    Label: string;
                    /**
                     * 最高审核分数。
                     * @example `100`
                     */
                    MaxScore: string;
                    /**
                     * 审核结果各分类及其视频截图张数。
                     */
                    CounterList: {
                        /**
                         * 审核结果分类。取值：
                         * - **normal**：正常。
                         * - **meaningless**：图片中无内容（例如黑屏、白屏）。
                         * - **PIP**：画中画。
                         * - **smoking**：吸烟。
                         * - **drivelive**：车内直播。
                         * @example `smoking`
                         */
                        Label: string;
                        /**
                         * 视频截图张数。
                         * @example `4`
                         */
                        Count: number;
                    }[];
                    /**
                     * 命中Label下分数最高的视频截图信息。
                     */
                    TopList: {
                        /**
                         * 视频截图的地址。
                         * @example `http://temp-testbucket.oss-cn-shanghai.aliyuncs.com/aivideocensor/****.jpg`
                         */
                        Url: string;
                        /**
                         * 命中Label的视频截图的分数。
                         * @example `100`
                         */
                        Score: string;
                        /**
                         * 视频截图在视频中的位置。单位：毫秒。
                         * @example `500`
                         */
                        Timestamp: string;
                        /**
                         * 审核结果分类。取值范围：
                         * - **normal**：正常。
                         * - **meaningless**：图片中无内容（例如黑屏、白屏）。
                         * - **PIP**：画中画。
                         * - **smoking**：吸烟。
                         * - **drivelive**：车内直播。
                         * @example `smoking`
                         */
                        Label: string;
                    }[];
                };
                /**
                 * Logo审核结果。
                 */
                LogoResult: {
                    /**
                     * Logo审核建议。取值：
                     * - **block**：违规。
                     * - **review**：疑似。
                     * - **pass**：通过。
                     * @example `block`
                     */
                    Suggestion: string;
                    /**
                     * 命中Label的视频截图的平均分值。
                     * @example `100`
                     */
                    AverageScore: string;
                    /**
                     * Logo审核结果分类。取值：
                     * - **normal**：正常。
                     * - **TV**：含受管控的Logo。
                     * - **trademark**：含商标。
                     * @example `TV`
                     */
                    Label: string;
                    /**
                     * 命中Label的视频截图的最高分数。
                     * @example `100`
                     */
                    MaxScore: string;
                    /**
                     * 审核结果各分类及其视频截图张数。
                     */
                    CounterList: {
                        /**
                         * logo审核结果分类。取值：
                         * - **normal**：正常。
                         * - **TV**：含受管控的logo。
                         * - **trademark**：含商标。
                         * @example `TV`
                         */
                        Label: string;
                        /**
                         * 视频截图张数。
                         * @example `2`
                         */
                        Count: number;
                    }[];
                    /**
                     * 命中Label下分数最高的视频截图信息。
                     */
                    TopList: {
                        /**
                         * 视频截图的地址。
                         * @example `http://temp-testbucket.oss-cn-shanghai.aliyuncs.com/aivideocensor/****.jpg`
                         */
                        Url: string;
                        /**
                         * 命中Label的视频截图的分数。
                         * @example `100`
                         */
                        Score: string;
                        /**
                         * 视频截图在视频中的位置。单位：毫秒。
                         * @example `5000`
                         */
                        Timestamp: string;
                        /**
                         * Logo审核结果分类。取值：
                         * - **normal**：正常。
                         * - **TV**：含受管控的Logo。
                         * - **trademark**：含商标。
                         * @example `TV`
                         */
                        Label: string;
                    }[];
                };
            };
        };
    };
}
