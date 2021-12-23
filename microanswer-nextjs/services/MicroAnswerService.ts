import Search from "../viewmodel/Search";

export default class MicroAnswerService {

  //Posts the Micro Answer API. Returns an image, an answer and a url, all related to the search word.
  public static async SearchMicroAnswer(searchWord: string): Promise<Search> {
    const response = await fetch('https://api.m3o.com/v1/answer/Question', {
      method: 'POST',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
        'Authorization': "Bearer " + process.env.MICROANSWER_KEY
      },
      body: JSON.stringify({
        query: searchWord,
      }),
    });
    return response.json();
  }
}
