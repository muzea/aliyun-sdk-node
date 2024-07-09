export interface TagCustomPersonRequest {
    /**
     * ⼈物库ID。⽤于唯⼀标识⼀个⾃定义⼈物库，由调⽤者⽣成，调⽤者⾃⼰保证唯⼀性，注意不能与系统⼈物库ID相同 ，如相同则默认使用系统人物库。最⻓⽀持120字符，不限中英文，不区分⼤⼩写。可以通过[列出人物库所有人物和人脸信息](~~187787~~)接口查询。
     * @example `CategoryId001-****`
     */
    "CategoryId"?: string;
    /**
     * ⼈物库名称。最⻓⽀持512字符，不限中英文。
     * @example `CategoryNametest-****`
     */
    "CategoryName"?: string;
    /**
     * ⼈物库描述。最⻓⽀持512字符，不限中英文。
     * @example `CategoryDescription001-****`
     */
    "CategoryDescription"?: string;
    /**
     * ⼈物ID。⽤于唯⼀标识⼀个⾃定义⼈物。由调⽤者⽣成，调⽤者⾃⼰保证唯⼀性。最⻓⽀持120字符，不限中英文，不区分⼤⼩写。可以通过[列出人物库所有人物和人脸信息](~~187787~~)接口查询。返回FaceId为String类型。
     * @example `PersonId001-****`
     */
    "PersonId"?: string;
    /**
     * ⼈物名称。最⻓⽀持512字符，不限中英文。
     * @example `PersonNametest-****`
     */
    "PersonName"?: string;
    /**
     * ⼈物描述。最⻓⽀持512字符，不限中英文。
     * @example `PersonDescriptiontest-****`
     */
    "PersonDescription"?: string;
}
