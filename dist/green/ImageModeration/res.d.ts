export interface ImageModerationResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `6CF2815C-C8C7-4A01-B52E-FF6E24F53492`
     */
    RequestId: string;
    /**
     * 返回码。返回200代表成功。
     * @example `200`
     */
    Code: number;
    /**
     * 本次请求的响应消息。
     * @example `OK`
     */
    Msg: string;
    /**
     * 图片内容检测后的结果。
     */
    Data: {
        /**
         * 检测对象对应的数据ID。
         * > 如果在检测请求参数中传入了dataId，则此处返回对应的dataId。
         * @example `fb5ffab1-993b-449f-b8d6-b97d5e3331f2`
         */
        DataId: string;
        /**
         * 图片检测的风险标签、置信分等参数结果，数组结构。
         */
        Result: {
            /**
             * 图片内容检测运算后返回的标签。同一张图片可能会检出多个标签和分值。
             * @example `violent_explosion`
             */
            Label: string;
            /**
             * 置信分值，0到100分，保留到小数点后2位。部分标签无置信分。
             * @example `81.22`
             */
            Confidence: number;
        }[];
        Ext: {
            Recognition: {
                Classification: string;
                Confidence: number;
            }[];
            OcrResult: {
                Text: string;
                Location: {
                    X: number;
                    Y: number;
                    W: number;
                    H: number;
                };
            }[];
            TextInImage: {
                OcrResult: {
                    Text: string;
                    Location: {
                        X: number;
                        Y: number;
                        H: number;
                        W: number;
                    };
                }[];
                RiskWord: string[];
                CustomText: {
                    LibId: string;
                    LibName: string;
                    KeyWords: string;
                }[];
            };
            CustomImage: {
                LibId: string;
                ImageId: string;
                LibName: string;
            }[];
            PublicFigure: {
                FigureName: string;
                FigureId: string;
            }[];
            LogoData: {
                Location: {
                    X: number;
                    Y: number;
                    W: number;
                    H: number;
                };
                Logo: {
                    Label: string;
                    Name: string;
                    Confidence: number;
                }[];
            }[];
        };
        RiskLevel: string;
    };
}
