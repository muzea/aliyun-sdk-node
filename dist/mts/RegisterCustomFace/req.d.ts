export interface RegisterCustomFaceRequest {
    /**
     * ⼈物库ID，⽤于唯⼀标识⼀个⾃定义⼈物库。由调⽤者⽣成，调⽤者⾃⼰保证唯⼀性（请妥善保存此ID便于后续调用其他接口时使用），注意不能与系统⼈物库ID相同，如果相同则默认使用系统人物库。最⻓⽀持120字符，不限中英文，不区分⼤⼩写。
     * @example `CategoryId001-****`
     */
    "CategoryId": string;
    /**
     * ⼈物ID，⽤于唯⼀标识⼀个⾃定义⼈物。由调⽤者⽣成，调⽤者⾃⼰保证唯⼀性（请妥善保存此ID便于后续调用其他接口时使用） 。最⻓⽀持120字符，不限中英文，不区分⼤⼩写，返回FaceId为String类型。
     * @example `PersonId001-****`
     */
    "PersonId": string;
    /**
     * 需要注册的⼈脸图⽚公网地址，图⽚中有且仅包含⼀张正脸。
     * @example `http://example-****.jpeg`
     */
    "ImageUrl": string;
}
