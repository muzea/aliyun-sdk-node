export interface QueryMediaCensorJobDetailResponse {
    /**
     * 请求ID。
     * @example `B42299E6-F71F-465F-8FE9-4FC2E3D3C2CA`
     */
    RequestId: string;
    /**
     * 媒体审核作业结果列表。
     */
    MediaCensorJobDetail: {
        /**
         * 创建时间。
         * @example `2018-09-13T16:32:24Z`
         */
        CreationTime: string;
        /**
         * 完成时间。
         * @example `2018-09-13T16:38:24Z`
         */
        FinishTime: string;
        /**
         * 作业整体审核结果。取值：
         * - **pass**：通过
         * - **review**：人工重审
         * - **block**：拦截
         * > 任何一种类型的审核结果是review时，整体结果为review，任何一种类型的审核结果是block时，整体结果为block。
         * @example `block`
         */
        Suggestion: string;
        CoverImageCensorResults: {
            /**
             * 封面审核结果。
             */
            CoverImageCensorResult: {
                /**
                 * 视频封面OSS Object。
                 * @example `test/ai/censor/v2/vme-****.jpg`
                 */
                Object: string;
                /**
                 * 视频封面OSS Location。
                 * @example `oss-cn-shanghai`
                 */
                Location: string;
                /**
                 * 视频封面OSS Bucket。
                 * @example `bucket-out-test-****`
                 */
                Bucket: string;
                Results: {
                    /**
                     * 审核结果。
                     */
                    Result: {
                        /**
                         * 处理建议。取值：
                         * - **pass**：通过
                         * - **review**：人工重审
                         * - **block**：拦截
                         * @example `pass`
                         */
                        Suggestion: string;
                        /**
                         * 审核结果的标签。
                         * - 图片智能鉴黄（porn）结果分类：
                         *     - **normal：正常**
                         *     - **sexy：性感**
                         *     - **porn：色情**
                         * - 图片暴恐涉政（terrorism）结果分类：
                         *     - **normal：正常**
                         *     - **bloody：血腥**
                         *     - **explosion：爆炸烟光**
                         *     - **outfit：特殊装束**
                         *     - **logo：特殊标识**
                         *     - **weapon：武器**
                         *     - **politics：涉政**
                         *     - **violence ：打斗**
                         *     - **crowd：聚众**
                         *     - **parade：游行**
                         *     - **carcrash：车祸现场**
                         *     - **flag：旗帜**
                         *     - **location：地标**
                         *     - **others：其他**
                         * - 图文违规（ad）结果分类：
                         *     - **normal：正常**
                         *     - **ad：其他广告**
                         *     - **politics：文字含涉政内容**
                         *     - **porn：文字含涉黄内容**
                         *     - **abuse：文字含辱骂内容**
                         *     - **terrorism：文字含暴恐内容**
                         *     - **contraband：文字含违禁内容**
                         *     - **spam：文字含其他垃圾内容**
                         *     - **npx：牛皮癣广告**
                         *     - **qrcode：含二维码**
                         *     - **programCode：含小程序码**
                         * - 图片不良场景（live）结果分类：
                         *     - **normal：正常**
                         *     - **meaningless：图片中无内容（例如黑屏、白屏）**
                         *     - **PIP：画中画**
                         *     - **smoking：吸烟**
                         *     - **drivelive：车内直播**
                         * - 图片logo（logo）结果分类：
                         *     - **normal：正常**
                         *     - **TV：含受管控的logo**
                         *     - **trademark：含商标**
                         * @example `Normal`
                         */
                        Label: string;
                        /**
                         * 审核场景。
                         * - **porn**：鉴黄
                         * - **terrorism**：暴恐涉政
                         * - **ad**：图文违规
                         * - **live**：不良场景
                         * - **logo**：图片Logo
                         * @example `Antispam`
                         */
                        Scene: string;
                        /**
                         * 分值。取值：0~100。
                         * @example `100`
                         */
                        Rate: string;
                    }[];
                };
            }[];
        };
        /**
         * 作业状态。
         * @example `Success`
         */
        State: string;
        /**
         * 标题审核结果。
         */
        TitleCensorResult: {
            /**
             * 处理建议。取值：
             * - **pass**：通过
             * - **review**：人工重审
             * - **block**：拦截
             * @example `block`
             */
            Suggestion: string;
            /**
             * 审核结果的标签。
             * - **normal**：普通
             * - **spam**：含垃圾信息
             * - **ad**：广告
             * - **abuse**：辱骂
             * - **flood**：灌水
             * - **contraband**：违禁
             * - **meaningless**：无意义
             * @example `meaningless`
             */
            Label: string;
            /**
             * 审核场景。取固定值： **antispam**，文本反垃圾。
             * @example `antispam`
             */
            Scene: string;
            /**
             * 分值。
             * @example `99.91`
             */
            Rate: string;
        };
        /**
         * 作业失败时错误信息。执行成功时不返回此参数。
         * @example `The resource operated cannot be found`
         */
        Message: string;
        /**
         * 作业输入。
         */
        Input: {
            /**
             * 输入文件的OSS Object。
             * @example `test/ai/censor/test-****.mp4`
             */
            Object: string;
            /**
             * 输入文件的OSS Location。
             * @example `oss-cn-shanghai`
             */
            Location: string;
            /**
             * 输入文件的OSS Bucket。
             * @example `bucket-test-in-****`
             */
            Bucket: string;
        };
        /**
         * 弹幕审核结果。
         */
        BarrageCensorResult: {
            /**
             * 处理建议。取值：
             * - **pass**：通过
             * - **review**：人工重审
             * - **block**：拦截
             * @example `pass`
             */
            Suggestion: string;
            /**
             * 审核结果的标签。
             * - **normal**：普通
             * - **spam**：含垃圾信息
             * - **ad**：广告
             * - **abuse**：辱骂
             * - **flood**：灌水
             * - **contraband**：违禁
             * - **meaningless**：无意义
             * @example `normal`
             */
            Label: string;
            /**
             * 审核场景。取固定值： **antispam**，文本反垃圾。
             * @example `antispam`
             */
            Scene: string;
            /**
             * 分值。
             * @example `99.91`
             */
            Rate: string;
        };
        /**
         * 描述审核结果。
         */
        DescCensorResult: {
            /**
             * 处理建议。取值：
             * - **pass**：通过
             * - **review**：人工重审
             * - **block**：拦截
             * @example `review`
             */
            Suggestion: string;
            /**
             * 审核结果的标签。
             * - **normal**：普通
             * - **spam**：含垃圾信息
             * - **ad**：广告
             * - **abuse**：辱骂
             * - **flood**：灌水
             * - **contraband**：违禁
             * - **meaningless**：无意义
             * @example `terrorism`
             */
            Label: string;
            /**
             * 审核场景。取固定值： **antispam**，文本反垃圾。
             * @example `antispam`
             */
            Scene: string;
            /**
             * 分值。
             * @example `100`
             */
            Rate: string;
        };
        /**
         * 视频审查配置。
         */
        VideoCensorConfig: {
            /**
             * 视频截图结果的保存地址。
             */
            OutputFile: {
                /**
                 * 截图输出文件 （OSS Object）。
                 * > 示例中{Count}是占位符，图片Object依次为`output00001-****.jpg`,`output00002-****.jpg`等。
                 * @example `output{Count}.jpg`
                 */
                Object: string;
                /**
                 * 截图输出OSS Bucket所在数据中心（OSS Location）。
                 * @example `oss-cn-shanghai`
                 */
                Location: string;
                /**
                 * 截图输出文件所在OSS Bucket。
                 * @example `test-bucket-****`
                 */
                Bucket: string;
            };
            /**
             * 是否需要审核视频内容。默认值：**true**。可取值：
             * - **true**：审核
             * - **false**：不审核
             * @example `true`
             */
            VideoCensor: string;
            /**
             * 定制业务类型。默认common。
             * @example `common`
             */
            BizType: string;
        };
        /**
         * 媒体审核作业ID。
         * @example `f8f166eea7a44e9bb0a4aecf9543****`
         */
        JobId: string;
        /**
         * 用户自定义数据。
         * @example `example userdata ****`
         */
        UserData: string;
        /**
         * 作业失败时错误码。执行成功时此参数不返回。
         * @example `InvalidParameter.ResourceNotFound`
         */
        Code: string;
        /**
         * 视频审查结果。
         */
        VensorCensorResult: {
            VideoTimelines: {
                /**
                 * 详细时间点的审核结果，按照时间从小到大排序。
                 */
                VideoTimeline: {
                    /**
                     * 视频中的位置。
                     * 格式：`hh:mm:ss[.SSS]`。
                     * @example `00:02:59.999`
                     */
                    Timestamp: string;
                    /**
                     * 截图输出文件 （OSS Object）。
                     * > 示例中{Count}是占位符，图片Object依次为`output00001-****.jpg`,`output00002-****.jpg`等。
                     * @example `output{Count}.jpg`
                     */
                    Object: string;
                    CensorResults: {
                        /**
                         * 包含多种类型审核结果的标签、分值等。
                         */
                        CensorResult: {
                            /**
                             * 处理建议。取值：
                             * - **pass**：通过
                             * - **review**：人工重审
                             * - **block**：拦截
                             * @example `block`
                             */
                            Suggestion: string;
                            /**
                             * 审核结果的标签。
                             * - 图片智能鉴黄（porn）结果分类：
                             *     - **normal：正常**
                             *     - **sexy：性感**
                             *     - **porn：色情**
                             * - 图片暴恐涉政（terrorism）结果分类：
                             *     - **normal：正常**
                             *     - **bloody：血腥**
                             *     - **explosion：爆炸烟光**
                             *     - **outfit：特殊装束**
                             *     - **logo：特殊标识**
                             *     - **weapon：武器**
                             *     - **politics：涉政**
                             *     - **violence ：打斗**
                             *     - **crowd：聚众**
                             *     - **parade：游行**
                             *     - **carcrash：车祸现场**
                             *     - **flag：旗帜**
                             *     - **location：地标**
                             *     - **others：其他**
                             * - 图文违规（ad）结果分类：
                             *     - **normal：正常**
                             *     - **ad：其他广告**
                             *     - **politics：文字含涉政内容**
                             *     - **porn：文字含涉黄内容**
                             *     - **abuse：文字含辱骂内容**
                             *     - **terrorism：文字含暴恐内容**
                             *     - **contraband：文字含违禁内容**
                             *     - **spam：文字含其他垃圾内容**
                             *     - **npx：牛皮癣广告**
                             *     - **qrcode：含二维码**
                             *     - **programCode：含小程序码**
                             * - 图片不良场景（live）结果分类：
                             *     - **normal：正常**
                             *     - **meaningless：图片中无内容（例如黑屏、白屏）**
                             *     - **PIP：画中画**
                             *     - **smoking：吸烟**
                             *     - **drivelive：车内直播**
                             * - 图片logo（logo）结果分类：
                             *     - **normal：正常**
                             *     - **TV：含受管控的logo**
                             *     - **trademark：含商标**
                             * @example `flood`
                             */
                            Label: string;
                            /**
                             * 审核场景。
                             * - **porn**：鉴黄
                             * - **terrorism**：暴恐涉政
                             * - **ad**：图文违规
                             * - **live**：不良场景
                             * - **logo**：图片Logo
                             * @example `porn`
                             */
                            Scene: string;
                            /**
                             * 分值。
                             * @example `99.99`
                             */
                            Rate: string;
                        }[];
                    };
                }[];
            };
            /**
             * 下一页标识
             * @example `ea04afcca7cd4e80b9ece8fbb251****`
             */
            NextPageToken: string;
            CensorResults: {
                /**
                 * 审核结果集合，包含各种场景（黄、暴、恐、政）的概要信息。
                 */
                CensorResult: {
                    /**
                     * 处理建议。取值：
                     * - **pass**：通过
                     * - **review**：人工重审
                     * - **block**：拦截
                     * @example `review`
                     */
                    Suggestion: string;
                    /**
                     * 审核结果的标签。
                     * - 图片智能鉴黄（porn）结果分类：
                     *     - **normal：正常**
                     *     - **sexy：性感**
                     *     - **porn：色情**
                     * - 图片暴恐涉政（terrorism）结果分类：
                     *     - **normal：正常**
                     *     - **bloody：血腥**
                     *     - **explosion：爆炸烟光**
                     *     - **outfit：特殊装束**
                     *     - **logo：特殊标识**
                     *     - **weapon：武器**
                     *     - **politics：涉政**
                     *     - **violence ：打斗**
                     *     - **crowd：聚众**
                     *     - **parade：游行**
                     *     - **carcrash：车祸现场**
                     *     - **flag：旗帜**
                     *     - **location：地标**
                     *     - **others：其他**
                     * - 图文违规（ad）结果分类：
                     *     - **normal：正常**
                     *     - **ad：其他广告**
                     *     - **politics：文字含涉政内容**
                     *     - **porn：文字含涉黄内容**
                     *     - **abuse：文字含辱骂内容**
                     *     - **terrorism：文字含暴恐内容**
                     *     - **contraband：文字含违禁内容**
                     *     - **spam：文字含其他垃圾内容**
                     *     - **npx：牛皮癣广告**
                     *     - **qrcode：含二维码**
                     *     - **programCode：含小程序码**
                     * - 图片不良场景（live）结果分类：
                     *     - **normal：正常**
                     *     - **meaningless：图片中无内容（例如黑屏、白屏）**
                     *     - **PIP：画中画**
                     *     - **smoking：吸烟**
                     *     - **drivelive：车内直播**
                     * - 图片logo（logo）结果分类：
                     *     - **normal：正常**
                     *     - **TV：含受管控的logo**
                     *     - **trademark：含商标**
                     * @example `meaningless`
                     */
                    Label: string;
                    /**
                     * 审核场景。
                     * - **porn**：鉴黄
                     * - **terrorism**：暴恐涉政
                     * - **ad**：图文违规
                     * - **live**：不良场景
                     * - **logo**：图片Logo
                     * @example `terrorism`
                     */
                    Scene: string;
                    /**
                     * 分值。
                     * @example `100`
                     */
                    Rate: string;
                }[];
            };
        };
        /**
         * 管道ID。
         * @example `c5b30b7c0d0e4a0abde1d5f9e751****`
         */
        PipelineId: string;
    };
}
