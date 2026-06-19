export interface Artist {
  name: string;
  slug: string;
  specialty: string;
  image: string;
}

export const artists: Artist[] = [
  {
    name: "Chiwon An",
    slug: "chiwon-an",
    specialty: "Black & Grey Realism",
    image: "/images/artists/artist-01.jpg",
  },
  {
    name: "Lindsey Pergentile",
    slug: "lindsey-pergentile",
    specialty: "Traditional Japanese",
    image: "/images/artists/artist-02.jpg",
  },
  {
    name: "Hyunjoo Cho",
    slug: "hyunjoo-cho",
    specialty: "Fine Line",
    image: "/images/artists/artist-03.jpg",
  },
  {
    name: "Sunyul Irezumi",
    slug: "sunyul-irezumi",
    specialty: "Japanese Traditional",
    image: "/images/artists/artist-04.jpg",
  },
];
