import {By, Builder, until} from 'selenium-webdriver';

//? que seimpre se mande la fecha como primer argumento
const buscar_data_navegador = async(arr_xpath: Array<string>, url_string: string) => {
    let driver =  await new Builder().forBrowser('chrome').build();
    let respuesta:Array<string> = [];
    try{
        await driver.manage().setTimeouts({implicit: 500});
        await driver.get(url_string);

        for(let xpath of arr_xpath){
            let message = await driver.wait(until.elementLocated(By.xpath(xpath)),10000,'Se agoto el tiempo para encontrar el xpath',2000)
            let value = await message.getText()
            respuesta.push(value);
        }
        return respuesta

    }catch(err){
        console.log(err)
        return err
    }finally{
        driver.close();
    }
}




const arr_URL_x2 = [
    '/html/body/main/div[3]/div/div[2]/div[1]/table/tbody/tr[1]/th/time',
    '/html/body/main/div[3]/div/div[2]/div[1]/table/tbody/tr[1]/td[1]/div/ul/li[1]/span',
    '/html/body/main/div[3]/div/div[2]/div[1]/table/tbody/tr[1]/td[1]/div/ul/li[2]/span'
]
const arr_URL_x4 = [
    '/html/body/main/div[3]/div/div[2]/div[1]/table/tbody/tr[1]/th/time',
    '/html/body/main/div[3]/div/div[2]/div[1]/table/tbody/tr[1]/td[1]/div/ul/li[1]/span',
    '/html/body/main/div[3]/div/div[2]/div[1]/table/tbody/tr[1]/td[1]/div/ul/li[2]/span',
    '/html/body/main/div[3]/div/div[2]/div[1]/table/tbody/tr[1]/td[1]/div/ul/li[3]/span',
    '/html/body/main/div[3]/div/div[2]/div[1]/table/tbody/tr[1]/td[1]/div/ul/li[4]/span'
]
const arr_URL_x3 = [
    '/html/body/main/div[3]/div/div[2]/div[1]/table/tbody/tr[1]/th/time',
    '/html/body/main/div[3]/div/div[2]/div[1]/table/tbody/tr[1]/td[1]/div/ul/li[1]/span',
    '/html/body/main/div[3]/div/div[2]/div[1]/table/tbody/tr[1]/td[1]/div/ul/li[2]/span',
    '/html/body/main/div[3]/div/div[2]/div[1]/table/tbody/tr[1]/td[1]/div/ul/li[3]/span',
]

const url = 'https://www.lotteryusa.com/florida/pick-2/'


const ganamas = [
'/html/body/div[1]/div[2]/div[1]/div[2]/div/div/div[1]/table[2]/tbody/tr[1]/td[2]/span',
'/html/body/div[1]/div[2]/div[1]/div[2]/div/div/div[1]/table[2]/tbody/tr[2]/td[1]/span',
'/html/body/div[1]/div[2]/div[1]/div[2]/div/div/div[1]/table[2]/tbody/tr[2]/td[2]/span',
'/html/body/div[1]/div[2]/div[1]/div[2]/div/div/div[1]/table[2]/tbody/tr[2]/td[3]/span'
]

const main = async() => {
    buscar_data_navegador(arr_URL_x2,url )
    buscar_data_navegador(arr_URL_x4,'https://www.lotteryusa.com/florida/midday-pick-4/' )
    buscar_data_navegador(arr_URL_x3,'https://www.lotteryusa.com/florida/midday-pick-3/' )
    buscar_data_navegador(ganamas, 'https://loterianacional.gob.do/index.php')

}
main()