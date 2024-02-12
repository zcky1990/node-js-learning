const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
    res.render('index', {
			home: 'home',
			bride:{
				firstname: 'Devia',
				lastname: 'Nur Fadillah',
				profileUrl: '',
				socialMedia: [
					{
						username: '',
						link:'',
						platform: 'instagram'
					}
				],
				parent: {
					father: {
						firstname: 'Masdi',
						lastname: ''
					},
					mother: {
						firstname: 'Evi',
						lastname: ''
					}
				}
			},
			groom:{
				firstname: 'Soeltan',
				lastname: 'Zaki Rizaldy',
				profileUrl: '',
				socialMedia: [
					{
						username: '',
						link:'',
						platform: 'instagram'
					}
				],
				parent: {
					father: {
						firstname: 'Masdi',
						lastname: ''
					},
					mother: {
						firstname: 'Evi',
						lastname: ''
					}
				}
			},
			wedding:{
				date: "15-01-2025",
				akad: {
					date: "15-01-2025",
					start: '09:00',
					end: 'selesai',
					address:'Plataran Menteng, Jalan HOS. Cokroaminoto, RT.6/RW.4, Gondangdia, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta, Indonesia',
					mapUrl: 'https://www.google.com/maps/place/Plataran+Menteng/@-6.1919015,106.8285812,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69f423590651f7:0x983424b56075bd8!8m2!3d-6.1919015!4d106.8285812!16s%2Fg%2F11c5sw4rnx?entry=ttu'
				},
				resepsi: {
					date: "15-01-2025",
					start: '12:00',
					end: 'selesai',
					address:'Plataran Menteng, Jalan HOS. Cokroaminoto, RT.6/RW.4, Gondangdia, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta, Indonesia',
					mapUrl: 'https://www.google.com/maps/place/Plataran+Menteng/@-6.1919015,106.8285812,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69f423590651f7:0x983424b56075bd8!8m2!3d-6.1919015!4d106.8285812!16s%2Fg%2F11c5sw4rnx?entry=ttu'
				}
			},
			loveStory:[
				{
					date: '',
					desciption: '',
					imageUrl: ''
				}
			],
			envelop: {
				// backgroundImage: 'https://websitedemos.net/fiona-patisserie-04/wp-content/uploads/sites/1136/2022/11/bg-03.jpg',
				backgroundColor: '#f9f3ed'
			},
			gallery: [
			],
			guest: {
				name: '',
				address: ''
			},
			streaming: [
				{
					platform: '',
					streamLink: ''
				}
			],
			gifts: [
				{
					name: '',
					account:'',
					bankname:'',
					link: ''
				}
			]
	});
});


module.exports = router;