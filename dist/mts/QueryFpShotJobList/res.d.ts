export interface QueryFpShotJobListResponse {
    /**
     * 请求ID。
     * @example `25818875-5F78-4A13-BEF6-D7393642CA58`
     */
    RequestId: string;
    /**
     * 下一页标识。需记录下来，在下一次请求时传入即可。
     * @example `b11c171cced04565b1f38f1ecc39****`
     */
    NextPageToken: string;
    FpShotJobList: {
        /**
         * DNA作业信息。
         */
        FpShotJob: {
            /**
             * DNA作业查询结果。
             */
            FpShotResult: {
                AudioFpShots: {
                    /**
                     * 音频DNA查询结果。
                     */
                    FpShot: {
                        /**
                         * 唯一主键。
                         * @example `498ac941373341599c4777c8d884****`
                         */
                        PrimaryKey: string;
                        FpShotSlices: {
                            /**
                             * 相似音频。
                             */
                            FpShotSlice: {
                                /**
                                 * DNA库中音频的开始时间和时长。
                                 */
                                Duplication: {
                                    /**
                                     * 开始时间。
                                     * @example `0`
                                     */
                                    Start: string;
                                    /**
                                     * 时长。
                                     * @example `3`
                                     */
                                    Duration: string;
                                };
                                /**
                                 * 音频片段相似度。
                                 * @example `0`
                                 */
                                Similarity: string;
                                /**
                                 * 输入音频的开始时间和时长。
                                 */
                                Input: {
                                    /**
                                     * 开始时间。
                                     * @example `0`
                                     */
                                    Start: string;
                                    /**
                                     * 时长。
                                     * @example `5`
                                     */
                                    Duration: string;
                                };
                            }[];
                        };
                        /**
                         * 音频整体相似度。
                         * @example `0`
                         */
                        Similarity: string;
                    }[];
                };
                FpShots: {
                    /**
                     * 视频DNA查询结果。
                     */
                    FpShot: {
                        /**
                         * 视频唯一主键。
                         * @example `498ac941373341599c4777c8d884****`
                         */
                        PrimaryKey: string;
                        FpShotSlices: {
                            /**
                             * 相似视频。
                             */
                            FpShotSlice: {
                                /**
                                 * DNA库中视频的开始时间和时长。
                                 */
                                Duplication: {
                                    /**
                                     * 开始时间。
                                     * @example `1260`
                                     */
                                    Start: string;
                                    /**
                                     * 时长。
                                     * @example `48`
                                     */
                                    Duration: string;
                                };
                                /**
                                 * 视频片段相似度。
                                 * @example `0`
                                 */
                                Similarity: string;
                                /**
                                 * 输入视频的开始时间和时长。
                                 */
                                Input: {
                                    /**
                                     * 开始时间。
                                     * @example `46`
                                     */
                                    Start: string;
                                    /**
                                     * 时长。
                                     * @example `48`
                                     */
                                    Duration: string;
                                };
                            }[];
                        };
                        /**
                         * 视频整体相似度。
                         * > 整体相似度是片段相似度的平均值。如果DNA库中存在多个相似段，会返回多个命中结果。
                         * @example `0.8914769887924194`
                         */
                        Similarity: string;
                    }[];
                };
                TextFpShots: {
                    /**
                     * 文本DNA查询结果。
                     */
                    TextFpShot: {
                        /**
                         * 文本唯一主键。
                         * @example `3e34ac649945b53a1b0f863ce030****`
                         */
                        PrimaryKey: string;
                        /**
                         * 文本相似度。
                         * @example `1.0`
                         */
                        Similarity: string;
                        TextFpShotSlices: {
                            /**
                             * 重复文本。
                             */
                            TextFpShotSlice: {
                                /**
                                 * 匹配片段的置信度。
                                 * @example `1.0`
                                 */
                                Similarity: string;
                                /**
                                 * 查询匹配的文本片段。
                                 * @example `今天下雪了`
                                 */
                                InputText: string;
                                /**
                                 * 底库匹配的文本片段。
                                 * @example `今天下雪了`
                                 */
                                DuplicationText: string;
                                /**
                                 * 查询匹配片段起始时间和时长。
                                 */
                                InputFragment: {
                                    /**
                                     * 起始时间。
                                     * @example `0`
                                     */
                                    Start: string;
                                    /**
                                     * 时长。
                                     * @example `3`
                                     */
                                    Duration: string;
                                };
                            }[];
                        };
                    }[];
                };
            };
            /**
             * 创建时间。
             * @example `2017-01-10T12:00:00Z`
             */
            CreationTime: string;
            /**
             * 完成时间。
             * @example `0`
             */
            FinishTime: string;
            /**
             * 作业状态，可取值：
             * - **Queuing**：排队中。
             * - **Analysing**：分析中。
             * - **Success**：成功。
             * - **Fail**：失败。
             * @example `Success`
             */
            State: string;
            /**
             * 分析失败时错误信息。如果执行成功则不返回此参数。
             * @example `The parameter \"Id\" is invalid.A uuid must:1)be comprised of chracters[a-f],numbers[0-9];2)be 32 characters long`
             */
            Message: string;
            /**
             * 配置。
             */
            FpShotConfig: {
                /**
                 * 唯一的视频主键，唯一性由用户保证。
                 * @example `3ca84a39a9024f19853b21be9cf9****`
                 */
                PrimaryKey: string;
                /**
                 * 存储类型，取值：
                 * - **nosave**：不入库。
                 * - **save**：去重入库。
                 * - **forcesave**：强制入库。
                 * @example `save`
                 */
                SaveType: string;
                /**
                 * DNA库ID。
                 * @example `2288c6ca184c0e47098a5b665e2a12****`
                 */
                FpDBId: string;
            };
            /**
             * 文件ID。
             * @example `ebb51ee30f0b49aba959823fa991****`
             */
            FileId: string;
            /**
             * 用户自定义数据。
             * @example `testid-001`
             */
            UserData: string;
            /**
             * 输入文件时长，单位秒。
             * @example `5`
             */
            Duration: number;
            /**
             * 分析失败时错误码。
             * @example `InvalidParameter.UUIDFormatInvalid`
             */
            Code: string;
            /**
             * 作业输入。
             */
            InputFile: {
                /**
                 * 作业输入所在的OSS Object。
                 * @example `test.mp4`
                 */
                Object: string;
                /**
                 * 作业输入所在的OSS Location。
                 * @example `oss-cn-beiing`
                 */
                Location: string;
                /**
                 * 作业输入所在的OSS Bucket。
                 * @example `oss-test`
                 */
                Bucket: string;
            };
            /**
             * 管道ID。
             * @example `88c6ca184c0e47098a5b665e2a12****`
             */
            PipelineId: string;
            /**
             * 作业ID。
             * @example `88c6ca184c0e47098a5b665e2a12****`
             */
            Id: string;
            /**
             * 作业输入。
             * @example `{"Bucket":"oss-test","Location":"oss-cn-beiing","Object":"test.mp4"}`
             */
            Input: string;
        }[];
    };
    NonExistIds: {
        /**
         * 不存在的作业ID列表。
         */
        String: string[];
    };
}
