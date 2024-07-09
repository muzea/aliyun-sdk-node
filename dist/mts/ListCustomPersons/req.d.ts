export interface ListCustomPersonsRequest {
    /**
     * ⼈物库ID，⽤于唯⼀标识⼀个⾃定义⼈物库，由调⽤者⽣成，调⽤者⾃⼰保证唯⼀性。若不填写，将列出所有⾃定义⼈物库。最⻓⽀持120字符，不区分⼤⼩写
     * > 不能与系统⼈物库ID相同。
     * @example `CategoryId-****`
     */
    "CategoryId"?: string;
    /**
     * ⼈物ID。⽤于唯⼀标识⼀个⾃定义⼈物，由调⽤者⽣成，调⽤者⾃⼰保证唯⼀性。若不填写，将列出CategoryId下所有⼈物。
     * @example `PersonId-****`
     */
    "PersonId"?: string;
}
